'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'

import type { GitHubRepository } from '@/types/github'

import { ProjectCard } from './ProjectCard'

interface ProjectsCarouselProps {
  projects: GitHubRepository[]
}

export function ProjectsCarousel({
  projects,
}: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  const updateCarouselState = useCallback(() => {
    if (!emblaApi) return

    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateCarouselState()

    emblaApi.on('select', updateCarouselState)
    emblaApi.on('reInit', updateCarouselState)

    return () => {
      emblaApi.off('select', updateCarouselState)
      emblaApi.off('reInit', updateCarouselState)
    }
  }, [emblaApi, updateCarouselState])

  const scrollSnaps = emblaApi?.scrollSnapList() ?? []

  return (
    <div className="mt-10 sm:mt-12">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex touch-pan-y">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                min-w-0
                flex-[0_0_88%]
                pl-4
                sm:flex-[0_0_55%]
                lg:flex-[0_0_38%]
              "
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

     {/* Controls */}
    {projects.length > 1 && (
    <div className="mt-8 flex flex-col items-center gap-4">
        {/* Previous / next */}
        <div className="flex items-center justify-center gap-3">
        <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous projects"
            className="
            flex h-10 w-10 items-center justify-center
            rounded-full border
            transition-all duration-200
            enabled:hover:-translate-y-0.5
            enabled:hover:border-blue-400/30
            enabled:hover:bg-blue-400/[0.06]
            disabled:cursor-not-allowed
            disabled:opacity-30
            "
            style={{
            background: 'rgba(255,255,255,0.025)',
            borderColor: 'rgba(148,163,184,0.16)',
            color: '#f8fafc',
            }}
        >
            <ChevronLeft size={18} />
        </button>

        <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next projects"
            className="
            flex h-10 w-10 items-center justify-center
            rounded-full border
            transition-all duration-200
            enabled:hover:-translate-y-0.5
            enabled:hover:border-blue-400/30
            enabled:hover:bg-blue-400/[0.06]
            disabled:cursor-not-allowed
            disabled:opacity-30
            "
            style={{
            background: 'rgba(255,255,255,0.025)',
            borderColor: 'rgba(148,163,184,0.16)',
            color: '#f8fafc',
            }}
        >
            <ChevronRight size={18} />
        </button>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
            <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to project ${index + 1}`}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
                width: selectedIndex === index ? '24px' : '6px',
                background:
                selectedIndex === index
                    ? '#60a5fa'
                    : 'rgba(148,163,184,0.25)',
            }}
            />
        ))}
        </div>
    </div>
    )}
    </div>
  )
}