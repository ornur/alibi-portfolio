"use client";
import { InView } from "@/components/ui/in-view";
import { getKeyProjects, type Project } from "@/constants";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/motion-primitives/morphing-dialog";
import { PlusIcon, CalendarIcon, TargetIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTranslations } from "next-intl";
import ReactPlayer from "react-player";

export function Projects() {
  const isMobile = useIsMobile();
  const t = useTranslations();
  const keyProjects = getKeyProjects((key) => t(key));

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-background to-muted/10 py-32"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <InView
          variants={{
            hidden: { opacity: 0, y: isMobile ? 0 : 40, filter: "blur(4px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{
            margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -150px 0px",
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              {t("projects.title")}
            </h2>
            <p className="mx-auto max-w-3xl font-cyrillic text-xl text-muted-foreground">
              {t("projects.subtitle")}
            </p>
          </div>
        </InView>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keyProjects.map((project: Project, index: number) => (
            <InView
              key={project.id}
              variants={{
                hidden: {
                  opacity: 0,
                  y: isMobile ? 0 : 30,
                  filter: "blur(4px)",
                },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              viewOptions={{
                margin: isMobile ? "0px 0px 0px 0px" : "0px 0px -100px 0px",
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                delay: 0.1 * index,
              }}
            >
              <MorphingDialog
                transition={{
                  type: "spring",
                  bounce: 0.05,
                  duration: 0.25,
                }}
              >
                <MorphingDialogTrigger
                  style={{
                    borderRadius: "16px",
                    scrollbarGutter: "auto",
                  }}
                  className="group flex h-full w-full max-w-full flex-col overflow-hidden border border-border bg-card shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <MorphingDialogImage
                    src={project.image}
                    alt={project.title}
                    className="h-48 px-4 w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="flex grow flex-col p-6">
                    <div className="mb-3 flex items-start justify-between">
                      <div className="flex-1">
                        <MorphingDialogTitle className="mb-2 line-clamp-2 font-cyrillic text-lg font-bold text-foreground">
                          {project.title}
                        </MorphingDialogTitle>
                        <MorphingDialogSubtitle className="font-cyrillic text-sm text-muted-foreground">
                          {project.client}
                        </MorphingDialogSubtitle>
                      </div>
                      <div className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background/50 text-muted-foreground transition-all duration-200 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                        <PlusIcon size={16} />
                      </div>
                    </div>

                    <div className="mt-auto flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                        <CalendarIcon size={12} />
                        {project.year}
                      </span>
                      {/* <span className="truncate text-xs text-muted-foreground">
                        {project.tags[0]}
                      </span> */}
                    </div>
                  </div>
                </MorphingDialogTrigger>

                <MorphingDialogContainer>
                  <MorphingDialogContent
                    style={{
                      borderRadius: "24px",
                      scrollbarGutter: "auto",
                    }}
                    className="pointer-events-auto relative flex h-auto max-h-[185vh] w-full flex-col border border-border bg-card shadow-2xl sm:w-[600px] lg:w-[700px]"
                  >
                    <ReactPlayer
                      src={project.video}
                      playing={false}
                      controls={true}
                      muted={true}
                      style={{
                        width: "100%",
                        height: "auto",
                        aspectRatio: "16/9",
                      }}
                      config={{
                        vimeo: {
                          portrait: false,
                          byline: false,
                          title: false,
                          dnt: true,
                          pip: false,
                        },
                      }}
                    />
                    <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-6">
                      <div className="mb-4 flex items-start justify-between">
                        <div className="flex-1">
                          <MorphingDialogTitle className="mb-2 font-cyrillic text-2xl font-bold text-foreground">
                            {project.title}
                          </MorphingDialogTitle>
                          <MorphingDialogSubtitle className="font-cyrillic text-lg text-muted-foreground">
                            {project.client}
                          </MorphingDialogSubtitle>
                        </div>
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                          {project.year}
                        </span>
                      </div>

                      <MorphingDialogDescription
                        disableLayoutAnimation
                        variants={{
                          initial: { opacity: 0, scale: 0.8, y: 100 },
                          animate: { opacity: 1, scale: 1, y: 0 },
                          exit: { opacity: 0, scale: 0.8, y: 100 },
                        }}
                      >
                        <div className="space-y-4">
                          <p className="font-cyrillic leading-relaxed text-muted-foreground">
                            {project.description}
                          </p>

                          <div className="flex items-start gap-3 rounded-lg bg-muted/50 p-4">
                            <TargetIcon
                              size={20}
                              className="mt-0.5 flex-shrink-0 text-primary"
                            />
                            <div>
                              <h4 className="mb-1 font-cyrillic font-semibold text-foreground">
                                {t("projects.results")}
                              </h4>
                              <p className="font-cyrillic text-sm text-muted-foreground">
                                {project.results}
                              </p>
                            </div>
                          </div>

                          {/* <div>
                            <h4 className="mb-2 font-cyrillic font-semibold text-foreground">
                              {t("projects.categories")}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map(
                                (tag: string, tagIndex: number) => (
                                  <span
                                    key={tagIndex}
                                    className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                                  >
                                    {tag}
                                  </span>
                                )
                              )}
                            </div>
                          </div> */}
                        </div>
                      </MorphingDialogDescription>
                    </div>
                  </MorphingDialogContent>
                </MorphingDialogContainer>
              </MorphingDialog>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
