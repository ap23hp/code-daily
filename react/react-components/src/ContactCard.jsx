export default function ContactCard({ name, jobTitle, email }) {
  return (
    <li>
      <h2>{name}</h2>
      <dl>
        <dt>job</dt>
        <dd>{jobTitle}</dd>
        <dt>Email</dt>
        <dd>{email}</dd>
      </dl>
    </li>
  );
}
