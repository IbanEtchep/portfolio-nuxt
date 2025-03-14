import { defineCollection, z } from '@nuxt/content'

const commonDocsSchema = z.object({
    name: z.string().nonempty(),
    slug: z.string().nonempty(),
})

const commonProjectSchema = z.object({
    name: z.string().nonempty(),
    slug: z.string().nonempty(),
    description: z.string().nonempty(),
    skills: z.array(z.string().nonempty()).optional(),
})

const commonSkillSchema = z.object({
    name: z.string().nonempty(),
    slug: z.string().nonempty(),
    icon: z.string().optional(),
    technical: z.boolean().default(true),
})

export const collections = {
    projects_en: defineCollection({
        type: 'page',
        source: 'en/projects/*.md',
        schema: commonProjectSchema,
    }),
    projects_fr: defineCollection({
        type: 'page',
        source: 'fr/projects/*.md',
        schema: commonProjectSchema,
    }),
    skills_en: defineCollection({
        type: 'page',
        source: 'en/skills/*.md',
        schema: commonSkillSchema,
    }),
    skills_fr: defineCollection({
        type: 'page',
        source: 'fr/skills/*.md',
        schema: commonSkillSchema,
    }),
    docs_en: defineCollection({
        type: 'page',
        source: 'en/docs/*.md',
        schema: commonDocsSchema,
    }),
    docs_fr: defineCollection({
        type: 'page',
        source: 'fr/docs/*.md',
        schema: commonDocsSchema,
    }),
}
