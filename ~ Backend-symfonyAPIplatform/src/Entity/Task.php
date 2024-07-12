<?php

namespace App\Entity;

use App\Repository\TaskRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;

#[ORM\Entity(repositoryClass: TaskRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['task:read']],
    denormalizationContext: ['groups' => ['task:write']]
)]
class Task
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['task:read', 'user:read', 'project:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['task:read', 'user:read', 'project:read'])]
    private ?string $task_name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['task:read', 'user:read', 'project:read'])]
    private ?string $task_description = null;

    #[ORM\ManyToOne(inversedBy: 'tasks')]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['task:read', 'user:read'])]
    private ?Project $project = null;

    #[ORM\Column(length: 100)]
    #[Groups(['task:read', 'user:read', 'project:read'])]
    private ?string $status = null;

    /**
     * @var Collection<int, User>
     */
    #[ORM\ManyToMany(targetEntity: User::class, inversedBy: 'tasks_assignated')]
    #[Groups(['task:read', 'project:read'])]
    // #[Groups(['user:read'])]
    // #[MaxDepth(1)]
    private Collection $assignated_members;

    public function __construct()
    {
        $this->assignated_members = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTaskName(): ?string
    {
        return $this->task_name;
    }

    public function setTaskName(string $task_name): static
    {
        $this->task_name = $task_name;

        return $this;
    }

    public function getTaskDescription(): ?string
    {
        return $this->task_description;
    }

    public function setTaskDescription(?string $task_description): static
    {
        $this->task_description = $task_description;

        return $this;
    }

    public function getProject(): ?Project
    {
        return $this->project;
    }

    public function setProject(?Project $project): static
    {
        $this->project = $project;

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
    public function getAssignatedMembers(): Collection
    {
        return $this->assignated_members;
    }

    public function addAssignatedMember(User $assignatedMember): static
    {
        if (!$this->assignated_members->contains($assignatedMember)) {
            $this->assignated_members->add($assignatedMember);
        }

        return $this;
    }

    public function removeAssignatedMember(User $assignatedMember): static
    {
        $this->assignated_members->removeElement($assignatedMember);

        return $this;
    }
}
