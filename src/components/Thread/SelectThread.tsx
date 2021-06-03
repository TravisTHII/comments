import React from 'react'

import { useGlobalContext } from '../../context/Global'

import { SelectThreadItem } from './SelectThreadItem'

export function SelectThread() {

	const { thread, threads } = useGlobalContext()

	return (
		<div className="select-thread">
			<div className="st-header">
				<p>Select thread</p>
			</div>
			<div className="st-threads">
				{threads.map(t => (
					<SelectThreadItem
						key={t._id}
						selected={thread === t._id}
						thread={t}
					/>
				))}
			</div>
		</div>
	)
}
