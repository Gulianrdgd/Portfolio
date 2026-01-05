interface TimelineItem {
	type: 'education' | 'project' | 'work';
	title: string;
	date: string;
	description: string;
	link?: string;
	image: string[];
	tags: string[];
}

export type { TimelineItem };
