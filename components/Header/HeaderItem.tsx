export default function HeaderItem(props: any) {
	return (
		<div className="col">
			<props.icon className="icon" />

			<p>{props.title}</p>
		</div>
	);
}
