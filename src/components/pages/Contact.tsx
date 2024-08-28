import { FC } from "react";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IContactProps { }

export const Contact: FC<IContactProps> = (): JSX.Element => {
	return (
		<div className="contact">
			<div className="container mx-auto">Contact</div>
		</div>
	)
}