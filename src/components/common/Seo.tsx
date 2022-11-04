import { useLocation } from '@reach/router';
import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';

type ImageDataType = {
  images: {
    fallback: {
      src: string;
    };
  };
  width: number;
  height: number;
};

export type SeoProps = {
  description?: string;
  title?: string;
  keywords?: string;
  featuredImage?: ImageDataType;
};
export default function Seo(props: SeoProps) {
  // first get our default data from gatsby config and default featured image
  const { site, featuredImage } = useStaticQuery(graphql`
    query SeoMetaData {
      site {
        siteMetadata {
          title
          description
          siteUrl
          og {
            siteName
            twitterCreator
          }
        }
      }
      featuredImage: file(absolutePath: { glob: "images/public.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200)
        }
      }
    }
  `);

  // determine the featured image from props
  const ogImage =
    props.featuredImage ??
    (featuredImage?.childImageSharp?.gatsbyImageData as unknown as ImageDataType);

  // determine title and description
  const title = props.title ?? site?.siteMetadata?.title;
  const description = props.description ?? site?.siteMetadata?.description;

  // Use the location hook to get current page URL
  const location = useLocation();

  // construct the meta array for passing into react helmet.
  const metas = [
    // basic seo
    {
      name: 'description',
      content: description
    },
    {
      name: 'og:image',
      content: ogImage?.images.fallback.src
    },
    {
      name: 'og:image:width',
      content: `${ogImage?.width}`
    },
    {
      name: 'og:image:height',
      content: `${ogImage?.height}`
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:title',
      content: title
    },
    {
      name: 'og:description',
      content: description
    },
    {
      name: 'og:site_name',
      content: site!.siteMetadata!.og!.siteName
    },
    {
      name: 'og:url',
      content: `${site?.siteMetadata?.siteUrl}${location.pathname}`
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image'
    },
    {
      name: 'twitter:description',
      content: description
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:image',
      content: ogImage?.images.fallback.src
    },
    {
      name: 'twitter:creator',
      content: site!.siteMetadata!.og!.twitterCreator
    }
  ];

  // If we have keywords, then add it
  if (props.keywords) {
    metas.push({
      name: 'keywords',
      content: props.keywords
    });
  }

  return (
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {metas.map((meta) => (
        <meta key={meta.name} name={meta.name} content={meta.content} />
      ))}
    </Helmet>
  );
}
