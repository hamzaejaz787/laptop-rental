"use client";

import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";

const ParseRichText = ({ content }: { readonly content: BlocksContent }) => {
  if (!content) return null;
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        image: ({ image }) => (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alternativeText || ""}
            className="rounded"
          />
        ),
        link: ({ children, url }) => <Link href={url}>{children}</Link>,
        list: (props) => {
          if (props.format === "ordered") {
            return (
              <ol className="list-decimal pl-8 space-y-4">{props.children}</ol>
            );
          }
          return (
            <ul className="list-disc pl-8 space-y-4 marker:text-primary-red">
              {props.children}
            </ul>
          );
        },

        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <h1 className="font-bold">{children}</h1>;
            case 2:
              return <h2 className="font-bold text-3xl">{children}</h2>;
            case 3:
              return <h3 className="font-bold text-2xl">{children}</h3>;
            case 4:
              return <h4 className="font-bold text-xl">{children}</h4>;
            case 5:
              return <h5 className="font-bold text-lg">{children}</h5>;
            case 6:
              return <h6 className="font-bold text-base">{children}</h6>;
            default:
              return <h1>{children}</h1>;
          }
        },
      }}
    />
  );
};

export default ParseRichText;
