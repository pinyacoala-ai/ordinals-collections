import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
const path = fileURLToPath(new URL('../collections.json', import.meta.url))
const collections = JSON.parse(await readFile(path, 'utf8'))

for (const entry of collections) {
  entry.name = entry.name.trim()
}

collections.sort((a, b) => a.name.localeCompare(b.name))
await writeFile(path, JSON.stringify(collections, null, 2) + '\n')
console.log(`Formatted ${collections.length} entries`)