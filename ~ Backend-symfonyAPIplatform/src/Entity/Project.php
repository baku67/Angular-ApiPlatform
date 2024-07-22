<?php

namespace App\Entity;

use App\Entity\Diagram;

use App\Repository\ProjectRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Validator\Constraints as Assert;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

#[ORM\Entity(repositoryClass: ProjectRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['project:read']],
    denormalizationContext: ['groups' => ['project:write']]
)]
class Project
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['project:read', 'project:write', 'user:read',])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['project:read', 'project:write', 'user:read', 'task:read'])]
    private ?string $project_name = null;

    /**
     * @var Collection<int, Task>
     */
    #[ORM\OneToMany(targetEntity: Task::class, mappedBy: 'project', orphanRemoval: true)]
    #[Groups(['project:read', 'project:write'])]
    #[MaxDepth(1)]
    private Collection $tasks;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['project:read', 'project:write'])]
    private ?string $description = null;

    #[ORM\ManyToOne(inversedBy: 'projects_owned', cascade: ['remove'])]
    #[ORM\JoinColumn(nullable: true, onDelete:"CASCADE")] // true en attendant pour les Fixtures
    #[Groups(['project:read', 'project:write'])]
    private ?User $owner = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['project:read', 'project:write'])]
    private ?\DateTimeInterface $start_date = null;

    #[ORM\Column(type: Types::DATE_MUTABLE, nullable: true)]
    #[Groups(['project:read', 'project:write'])]
    private ?\DateTimeInterface $end_date = null;

    #[ORM\Column(length: 50)]
    #[Groups(['project:read', 'project:write'])]
    private ?string $status = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, mappedBy: 'projects_member')]
    #[Groups(['project:read', 'project:write'])]
    #[MaxDepth(2)]
    private Collection $members;

    /**
     * @var Diagram|null<int, Diagram>
     */
    #[ORM\OneToOne(targetEntity: Diagram::class, mappedBy: 'project', cascade: ['persist', 'remove'])]
    #[Groups(['project:read', 'project:write'])]
    private ?Diagram $diagram = null;

    public function __construct()
    {
        $this->tasks = new ArrayCollection();
        $this->members = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProjectName(): ?string
    {
        return $this->project_name;
    }

    public function setProjectName(string $project_name): static
    {
        $this->project_name = $project_name;

        return $this;
    }

    /**
     * @return Collection<int, Task>
     */
    public function getTasks(): Collection
    {
        return $this->tasks;
    }

    public function addTask(Task $task): static
    {
        if (!$this->tasks->contains($task)) {
            $this->tasks->add($task);
            $task->setProject($this);
        }

        return $this;
    }

    public function removeTask(Task $task): static
    {
        if ($this->tasks->removeElement($task)) {
            // set the owning side to null (unless already changed)
            if ($task->getProject() === $this) {
                $task->setProject(null);
            }
        }

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getOwner(): ?User
    {
        return $this->owner;
    }

    public function setOwner(?User $owner): static
    {
        $this->owner = $owner;

        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->start_date;
    }

    public function setStartDate(\DateTimeInterface $start_date): static
    {
        $this->start_date = $start_date;

        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->end_date;
    }

    public function setEndDate(?\DateTimeInterface $end_date): static
    {
        $this->end_date = $end_date;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): static
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getMembers(): Collection
    {
        return $this->members;
    }

    public function addMember(User $member): static
    {
        if (!$this->members->contains($member)) {
            $this->members->add($member);
            $member->addProjectsMember($this);
        }

        return $this;
    }

    public function removeMember(User $member): static
    {
        if ($this->members->removeElement($member)) {
            $member->removeProjectsMember($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Diagram>
     */
    public function getDiagram(): ?Diagram
    {
        return $this->diagram;
    }


    public function setDiagram(Diagram $diagram): self
    {
        if ($this->diagram->removeElement($diagram)) {

            $this->diagram = $diagram;

            return $this;
        }

        return $this;
    }
}
