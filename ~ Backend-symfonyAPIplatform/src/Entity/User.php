<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Validator\Constraints as Assert;

use ApiPlatform\Metadata\ApiResource;
use Doctrine\DBAL\Types\Types;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;


#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['user:read']],
    denormalizationContext: ['groups' => ['user:write']]
)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['user:read', 'project:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:read', 'user:write', 'task:read', 'project:read'])]
    private ?string $username = null;

    #[ORM\Column(length: 255, unique:true)]
    #[Groups(['user:read', 'user:write'])]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:read', 'user:write'])]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    #[Groups(['user:read', 'user:write'])]
    private ?string $roles = null;

    /**
     * @var Collection<int, Project>
     */
    #[ORM\OneToMany(targetEntity: Project::class, mappedBy: 'owner', orphanRemoval: true)]
    #[Groups(['user:read', 'user:write'])]
    #[MaxDepth(2)]
    private Collection $projects_owned;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['user:read', 'user:write', 'project:read'])]
    private ?string $imgUrl = null;

    /**
     * @var Collection<int, Project>
     */
    #[ORM\ManyToMany(targetEntity: Project::class, inversedBy: 'members')]
    #[Groups(['user:read', 'user:write'])]
    #[MaxDepth(1)]
    private Collection $projects_member;

    /**
     * @var Collection<int, Task>
     */
    #[ORM\ManyToMany(targetEntity: Task::class, mappedBy: 'assignated_members')]
    #[Groups(['user:read', 'user:write'])]
    #[MaxDepth(1)]
    private Collection $tasks_assignated;

    public function __construct()
    {
        $this->projects_owned = new ArrayCollection();
        $this->projects_member = new ArrayCollection();
        $this->tasks_assignated = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUsername(): ?string
    {
        return $this->username;
    }

    public function setUsername(string $username): static
    {
        $this->username = $username;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): static
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): static
    {
        $this->password = $password;

        return $this;
    }

    public function getRoles(): ?string
    {
        return $this->roles;
    }

    public function setRoles(string $roles): static
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @return Collection<int, Project>
     */
    public function getProjectsOwned(): Collection
    {
        return $this->projects_owned;
    }

    public function addProjectsOwned(Project $projectsOwned): static
    {
        if (!$this->projects_owned->contains($projectsOwned)) {
            $this->projects_owned->add($projectsOwned);
            $projectsOwned->setOwner($this);
        }

        return $this;
    }

    public function removeProjectsOwned(Project $projectsOwned): static
    {
        if ($this->projects_owned->removeElement($projectsOwned)) {
            // set the owning side to null (unless already changed)
            if ($projectsOwned->getOwner() === $this) {
                $projectsOwned->setOwner(null);
            }
        }

        return $this;
    }

    public function getImgUrl(): ?string
    {
        return $this->imgUrl;
    }

    public function setImgUrl(?string $imgUrl): static
    {
        $this->imgUrl = $imgUrl;

        return $this;
    }

    /**
     * @return Collection<int, Project>
     */
    public function getProjectsMember(): Collection
    {
        return $this->projects_member;
    }

    public function addProjectsMember(Project $projectsMember): static
    {
        if (!$this->projects_member->contains($projectsMember)) {
            $this->projects_member->add($projectsMember);
        }

        return $this;
    }

    public function removeProjectsMember(Project $projectsMember): static
    {
        $this->projects_member->removeElement($projectsMember);

        return $this;
    }

    /**
     * @return Collection<int, Task>
     */
    public function getTasksAssignated(): Collection
    {
        return $this->tasks_assignated;
    }

    public function addTasksAssignated(Task $tasksAssignated): static
    {
        if (!$this->tasks_assignated->contains($tasksAssignated)) {
            $this->tasks_assignated->add($tasksAssignated);
            $tasksAssignated->addAssignatedMember($this);
        }

        return $this;
    }

    public function removeTasksAssignated(Task $tasksAssignated): static
    {
        if ($this->tasks_assignated->removeElement($tasksAssignated)) {
            $tasksAssignated->removeAssignatedMember($this);
        }

        return $this;
    }
}
