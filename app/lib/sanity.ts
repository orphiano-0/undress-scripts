import { createClient } from "next-sanity"

# the project id is based from my sanity account
const projectId = 'baue88l1'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});
