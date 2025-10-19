import { z } from 'zod'

export const SlugSchema = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'slug must be lowercase, alphanumeric and hyphen-separated')

export const CreditSchema = z.object({
  role: z.string().min(1),
  name: z.string().min(1),
  link: z.string().url().optional(),
})

export type Credit = z.infer<typeof CreditSchema>

const ImageItemSchema = z.object({
  type: z.literal('image'),
  url: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().optional(),
  width: z.number().int().positive().optional(),
  height: z.number().int().positive().optional(),
})

const VideoItemSchema = z.object({
  type: z.literal('video'),
  url: z.string().min(1),
  poster: z.string().optional(),
  caption: z.string().optional(),
})

const EmbedItemSchema = z.object({
  type: z.literal('embed'),
  html: z.string().min(1),
  caption: z.string().optional(),
})

export const MediaItemSchema = z.discriminatedUnion('type', [ImageItemSchema, VideoItemSchema, EmbedItemSchema])

export type MediaItem = z.infer<typeof MediaItemSchema>

export const ProjectSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1),
  slug: SlugSchema,
  role: z.string().min(1),
  client: z.string().optional(),
  year: z.number().int().gte(1900).lte(3000),
  tags: z.array(z.string()).default([]),
  description: z.string().optional(),
  longDescriptionMdx: z.string().optional(),
  media: z.array(MediaItemSchema).default([]),
  credits: z.array(CreditSchema).default([]),
})

export type Project = z.infer<typeof ProjectSchema>

export const ProjectSummarySchema = ProjectSchema.pick({
  id: true,
  title: true,
  slug: true,
  client: true,
  year: true,
  tags: true,
  description: true,
})

export type ProjectSummary = z.infer<typeof ProjectSummarySchema>

export const ProjectsIndexSchema = z.union([
  z.object({ projects: z.array(SlugSchema) }),
  z.array(SlugSchema),
])

export type ProjectsIndex = z.infer<typeof ProjectsIndexSchema>

export type ProjectWithContent = Project & {
  longDescriptionMdxSource?: string
}
