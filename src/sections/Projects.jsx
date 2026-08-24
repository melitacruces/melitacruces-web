import { useLayoutEffect, useRef, useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { SectionTitle, ProjectCard, CollapsibleProjectCard } from '@/components';

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isCollapsing, setIsCollapsing] = useState(false);
  const [collapsedDescriptionLines, setCollapsedDescriptionLines] = useState([]);
  const [collapsedCardMinHeights, setCollapsedCardMinHeights] = useState([]);
  const otherProjectsGridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = otherProjectsGridRef.current;
    if (!grid) return undefined;

    const updateDescriptionLines = () => {
      const titles = Array.from(
        grid.querySelectorAll('[data-collapsible-project-title]')
      );
      const rows = new Map();

      titles.forEach((title, index) => {
        const cardTop = Math.round(title.closest('article').getBoundingClientRect().top);
        const lineHeight = Number.parseFloat(window.getComputedStyle(title).lineHeight);
        const titleLines = lineHeight > 0
          ? Math.round(title.getBoundingClientRect().height / lineHeight)
          : 1;
        const row = rows.get(cardTop) ?? [];

        row.push({ index, titleLines });
        rows.set(cardTop, row);
      });

      const nextLines = titles.map(() => 2);
      rows.forEach((row) => {
        const largestTitleLines = Math.max(...row.map(({ titleLines }) => titleLines));

        row.forEach(({ index, titleLines }) => {
          nextLines[index] += largestTitleLines - titleLines;
        });
      });

      setCollapsedDescriptionLines((currentLines) => (
        currentLines.length === nextLines.length
        && currentLines.every((lineCount, index) => lineCount === nextLines[index])
          ? currentLines
          : nextLines
      ));
    };

    updateDescriptionLines();

    const resizeObserver = new ResizeObserver(updateDescriptionLines);
    resizeObserver.observe(grid);

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    const grid = otherProjectsGridRef.current;
    if (!grid || expandedIndex !== null || isCollapsing) return undefined;

    const updateCollapsedCardHeights = () => {
      const cards = Array.from(
        grid.querySelectorAll('[data-collapsible-project-card]')
      );
      const rows = new Map();

      cards.forEach((card, index) => {
        const content = card.querySelector('[data-collapsible-project-content]');
        const title = card.querySelector('[data-collapsible-project-title]');
        const description = card.querySelector('[data-collapsible-project-description]');
        const footer = card.querySelector('[data-collapsible-project-footer]');

        if (!content || !title || !description || !footer) return;

        const contentStyle = window.getComputedStyle(content);
        const verticalPadding = Number.parseFloat(contentStyle.paddingTop)
          + Number.parseFloat(contentStyle.paddingBottom);
        const gap = Number.parseFloat(contentStyle.rowGap) || 0;
        const naturalHeight = verticalPadding
          + title.getBoundingClientRect().height
          + description.getBoundingClientRect().height
          + footer.getBoundingClientRect().height
          + (gap * 2);
        const cardTop = Math.round(card.getBoundingClientRect().top);
        const row = rows.get(cardTop) ?? [];

        row.push({ index, naturalHeight });
        rows.set(cardTop, row);
      });

      const nextHeights = cards.map(() => 0);
      rows.forEach((row) => {
        const largestCardHeight = Math.ceil(
          Math.max(...row.map(({ naturalHeight }) => naturalHeight))
        );

        row.forEach(({ index }) => {
          nextHeights[index] = largestCardHeight;
        });
      });

      setCollapsedCardMinHeights((currentHeights) => (
        currentHeights.length === nextHeights.length
        && currentHeights.every((height, index) => height === nextHeights[index])
          ? currentHeights
          : nextHeights
      ));
    };

    updateCollapsedCardHeights();

    const resizeObserver = new ResizeObserver(updateCollapsedCardHeights);
    resizeObserver.observe(grid);

    return () => resizeObserver.disconnect();
  }, [collapsedDescriptionLines, expandedIndex, isCollapsing]);

  return (
    <section className="container section" id="projects" aria-labelledby="projects-heading">
      <div className="section-inner">
        <div className="section-header">
          <SectionTitle id="projects-heading">Proyectos Destacados</SectionTitle>
          <p className="section-lead">
            Una selección de mis proyectos.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {portfolioData.otherProjects.length > 0 && (
          <div className="mt-16 w-full">
            <div className="mb-10 mt-16 flex justify-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight text-center">
                Otros Proyectos
              </h3>
            </div>
            <div
              ref={otherProjectsGridRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start"
            >
              {portfolioData.otherProjects.map((project, index) => (
                <CollapsibleProjectCard
                  key={project.title}
                  project={project}
                  isExpanded={expandedIndex === index}
                  collapsedDescriptionLines={collapsedDescriptionLines[index] ?? 2}
                  collapsedMinHeight={collapsedCardMinHeights[index]}
                  onCollapseComplete={() => setIsCollapsing(false)}
                  onToggle={() => {
                    setIsCollapsing(expandedIndex === index);
                    setExpandedIndex((currentIndex) => (
                      currentIndex === index ? null : index
                    ));
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
