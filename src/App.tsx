import React, { CSSProperties, useState } from 'react'
import FocusLock from 'react-focus-lock'

const App: React.FC = () => {
	const [isOpen1, setOpen1] = useState(false)
	const [isOpen2, setOpen2] = useState(false)
	return (
		<>
			<p>Start here:</p>
			<button onClick={() => setOpen1(true)}>Open modal 1</button>
			{isOpen1 && (
				<div style={modalCss}>
					<FocusLock returnFocus>
						<div style={windowCss}>
							<button onClick={() => setOpen1(false)}>X1</button>
							<p>
								This is modal 1. Closing this should return
								focus to the ‘Open modal 1’ button. Instead, it
								does nothing – if you click the button below
								first:
							</p>
							<button onClick={() => setOpen2(true)}>
								Open modal 2
							</button>
						</div>
					</FocusLock>
				</div>
			)}
			{isOpen2 && (
				<div style={modalCss}>
					<FocusLock returnFocus>
						<div style={windowCss}>
							<button onClick={() => setOpen2(false)}>X2</button>
							<p>
								This is modal 2. Closing this should return
								focus to the ‘Open modal 2’ button. Instead it
								goes to the ‘X1’ button.
							</p>
						</div>
					</FocusLock>
				</div>
			)}
		</>
	)
}

const modalCss: CSSProperties = {
	background: 'rgba(0, 0, 0, .6)',
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
}

const windowCss: CSSProperties = {
	background: 'white',
	position: 'absolute',
	padding: 20,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
}

export default App
