// Renders schema.org structured data. "<" is escaped so CMS text can never
// close the script tag early.
const JsonLd = ({ data }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
  />
);

export default JsonLd;
