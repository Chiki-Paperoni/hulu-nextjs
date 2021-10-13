export default function HeaderItem(props: any) {
	return (
		<div className="col" onClick={props.handler}>
			<props.icon className="icon" />

			<p>{props.title}</p>
		</div>
	);
}
