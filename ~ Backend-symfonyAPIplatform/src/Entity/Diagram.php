<?php

namespace App\Entity;

use App\Repository\DiagramRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Serializer\Annotation\MaxDepth;


#[ORM\Entity(repositoryClass: DiagramRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['diagram:read']],
    denormalizationContext: ['groups' => ['diagram:write']]
)]
class Diagram
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['diagram:read', 'diagram:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['diagram:read', 'diagram:read'])]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    #[Groups(['diagram:read', 'diagram:read'])]
    private ?string $json = null;

    #[ORM\ManyToOne(inversedBy: 'diagram')]
    private ?Project $project = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): static
    {
        $this->title = $title;

        return $this;
    }

    public function getJson(): ?string
    {
        return $this->json;
    }

    public function setJson(?string $json): static
    {
        $this->json = $json;

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
}
