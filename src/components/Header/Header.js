import React from 'react';

import Link from 'next/link';

export default class Header extends React.Component {
  render() {
    const stl = {
      container: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
      link: { margin: '.5rem 0' },
    };
    return (
      <div style={stl.container}>
        <Link href="/index">
          <a style={stl.link}>HOME</a>
        </Link>
        <Link href="/about">
          <a style={stl.link}>ABOUT</a>
        </Link>
      </div>
    )
  }
}