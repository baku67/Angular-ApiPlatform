<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserRepository::class)]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $username = null;

    #[ORM\Column(length: 255, unique:true)]
    private ?string $email = null;

    #[ORM\Column(length: 255)]
    private ?string $password = null;

    #[ORM\Column(length: 255)]
    private ?string $roles = null;

    /**
     * @var Collection<int, Project>
     */
    #[ORM\OneToMany(targetEntity: Project::class, mappedBy: 'owner')]
    private Collection $projects_owned;

    public function __construct()
    {
        $this->projects_owned = new ArrayCollection();
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
}
