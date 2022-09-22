import { esClient } from './deps.ts';
import { getFiles } from './util/helper.ts';
import { testCasesFolderFullPath } from './util/constant.ts';
import { grayMatter } from './deps.ts';

const INDEX_NAME = 'test-cases';

const client = new esClient({
    node: Deno.env.get('ELASTIC_URL') || 'http://localhost:9200'
});

try {
    await client.indices.delete({
        index: INDEX_NAME,
    });
} catch {
    console.debug(`Index ${INDEX_NAME} does not exist. Skipping delete.`);
}
console.debug(`Deleted index ${INDEX_NAME}`)

await client.indices.create({
    index: INDEX_NAME,
});
console.debug(`Created index ${INDEX_NAME}`)


const testCases = getFiles(testCasesFolderFullPath, 'md');

for (const tc of testCases) {
    const { content, data } = grayMatter.read(tc);
    await client.documents.index({
        target: INDEX_NAME,
        _id: data.id,
        body: {
            content,
            ...data 
        }
    });
}
console.debug(`Indexed ${testCases.length} test cases`);



