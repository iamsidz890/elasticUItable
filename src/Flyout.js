import React, { useState, useEffect } from "react";
import {
	EuiFlyout,
	EuiFlyoutHeader,
	EuiFlyoutBody,
	EuiButton,
	EuiText,
	EuiTitle,
} from "@elastic/eui";

function Flyout() {
	const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

	const closeFlyout = () => setIsFlyoutVisible(false);

	const showFlyout = () => setIsFlyoutVisible(true);

	let flyout;
	if (isFlyoutVisible) {
		flyout = (
			<EuiFlyout
				ownFocus
				onClose={closeFlyout}
				size='l'
				aria-labelledby='flyoutLargeTitle'>
				<EuiFlyoutHeader hasBorder>
					<EuiTitle size='m'>
						<h2 id='flyoutLargeTitle'>A large flyout</h2>
					</EuiTitle>
				</EuiFlyoutHeader>
				<EuiFlyoutBody>
					<EuiText>
						<p>The large flyout is very wide.</p>
					</EuiText>
				</EuiFlyoutBody>
			</EuiFlyout>
		);
	}
	return (
		<div>
			<EuiButton onClick={showFlyout}>Show</EuiButton>
		</div>
	);
}

export default Flyout;
