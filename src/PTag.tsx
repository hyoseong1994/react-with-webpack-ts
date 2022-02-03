import React from "react";

interface pTagProperty {
  first: string;
  code: string;
  last: string;
}

function PTag({ first, code, last }: pTagProperty): JSX.Element {
  return (
    <p>
      {first} <code>{code}</code> {last}
    </p>
  );
}

export default PTag;
