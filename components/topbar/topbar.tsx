import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="nv-topbar">
      <Link href="/">
        <a aria-label="Homepage">
          <img src="/assets/shared/logo.svg" alt="" />
        </a>
      </Link>
      <Link href="/">
        <a className="call-to-action">Pre-order now</a>
      </Link>
    </div>
  );
}
