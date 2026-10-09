import { Helmet } from 'react-helmet-async'

export default function SEO(props) {
  const {
    title,
    description,
    canonical,
    ogLocale = 'en_US',
    ogType = 'website',
    ogTitle,
    ogDescription,
    ogUrl,
    ogSiteName,
    ogImage,
    ogImageSecureUrl,
    ogImageAlt,
    ogImageType = 'image/jpeg',
    twitterCard = 'summary_large_image',
    twitterTitle,
    twitterDescription,
    twitterUrl,
    twitterImage,
  } = props

  const metaTitle = ogTitle || title
  const metaDescription = ogDescription || description
  const metaUrl = ogUrl || canonical
  const metaTwitterTitle = twitterTitle || metaTitle
  const metaTwitterDescription = twitterDescription || metaDescription
  const metaTwitterUrl = twitterUrl || metaUrl
  const metaTwitterImage = twitterImage || ogImage

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      {ogLocale && <meta property="og:locale" content={ogLocale} />}
      {ogType && <meta property="og:type" content={ogType} />}
      {metaTitle && <meta property="og:title" content={metaTitle} />}
      {metaDescription && <meta property="og:description" content={metaDescription} />}
      {metaUrl && <meta property="og:url" content={metaUrl} />}
      {ogSiteName && <meta property="og:site_name" content={ogSiteName} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      {(ogImageSecureUrl || ogImage) && (
        <meta property="og:image:secure_url" content={ogImageSecureUrl || ogImage} />
      )}
      {ogImageAlt && <meta property="og:image:alt" content={ogImageAlt} />}
      {ogImageType && <meta property="og:image:type" content={ogImageType} />}

      {/* Twitter Card */}
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {metaTwitterTitle && <meta name="twitter:title" content={metaTwitterTitle} />}
      {metaTwitterDescription && <meta name="twitter:description" content={metaTwitterDescription} />}
      {metaTwitterUrl && <meta name="twitter:url" content={metaTwitterUrl} />}
      {metaTwitterImage && <meta name="twitter:image" content={metaTwitterImage} />}
    </Helmet>
  )
}
