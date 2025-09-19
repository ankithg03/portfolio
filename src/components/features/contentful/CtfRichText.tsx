import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";

import { ArticleImage } from "@src/components/features/article";
import { ComponentRichImage } from "@src/lib/__generated/sdk";

export type EmbeddedEntryType = ComponentRichImage | null;

export interface ContentfulRichTextInterface {
  json: Document;
  links?:
    | {
        entries: {
          block: Array<EmbeddedEntryType>;
        };
      }
    | any;
}

export const EmbeddedEntry = (entry: EmbeddedEntryType) => {
  switch (entry?.__typename) {
    case "ComponentRichImage":
      return <ArticleImage image={entry} />;
    default:
      return null;
  }
};

export const contentfulBaseRichTextOptions = ({
  links,
}: ContentfulRichTextInterface): Options => ({
  renderNode: {
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const entry = links?.entries?.block?.find(
        (item: EmbeddedEntryType) => item?.sys?.id === node.data.target.sys.id,
      );

      if (!entry) return null;

      return <EmbeddedEntry {...entry} />;
    },

    // Headings with dark/light mode styles
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-6 mb-4">
        {children}
      </h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-5 mb-3">
        {children}
      </h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-4 mb-2">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mt-3 mb-2">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-base font-medium text-gray-600 dark:text-gray-400 mt-2 mb-1">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-1 mb-1 uppercase tracking-wide">
        {children}
      </h6>
    ),
  },
  renderMark: {
    [MARKS.CODE]: (text) => (
      <pre className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-3 rounded-md overflow-x-auto">
        <code>{text}</code>
      </pre>
    ),
  },
});

export const CtfRichText = ({ json, links }: ContentfulRichTextInterface) => {
  const baseOptions = contentfulBaseRichTextOptions({ links, json });

  return (
    <article className="prose prose-sm max-w-none dark:prose-invert">
      {documentToReactComponents(json, baseOptions)}
    </article>
  );
};
