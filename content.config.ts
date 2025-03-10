import { defineCollection, z } from '@nuxt/content'

const commonProjectSchema = z.object({
    slug: z.string(),
    name: z.string().nonempty(),
    description: z.string().nonempty(),
    skills: z.array(z.string().nonempty()).optional(),
})

const commonSkillSchema = z.object({
    name: z.string().nonempty(),
    icon: z.string().optional(),
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
}
