import React from "react";
import * as Form from "@radix-ui/react-form";
import "./RadixInput.scss";

export const FormDemo = () => (
	<Form.Root className="FormRoot">
		<Form.Field className="formInput" name="email">
			<Form.Label>Email</Form.Label>
			<Form.Control asChild>
				<input type="email" placeholder="Enter your email" required />
			</Form.Control>
		</Form.Field> 
	<Form.Field className="formInput" name="pass">
			<Form.Label>password</Form.Label>
			<Form.Control asChild>
				<input type="password" placeholder="Enter your password" required />
			</Form.Control>
		</Form.Field> 
	</Form.Root>
);

export default FormDemo;
