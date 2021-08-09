import styled from "@emotion/styled";

/**
 * This component is used to style specific edge cases of the default UI library to look more
 * comfortable while reading. Normally UI shouldn't contain additional spacing, which is why it is
 * only used for generated markdown content.
 */
const Content = styled("div")`
  p {
    margin-bottom: 1em;
  }
`;

export default Content;
