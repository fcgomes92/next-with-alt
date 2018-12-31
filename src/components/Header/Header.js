import React from 'react';

import Link from 'next/link';

export default class Header extends React.Component {
  render() {
    return (
      <>
        <Link href="/index">
          <a>HOME</a>
        </Link>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </>
    )
  }
}