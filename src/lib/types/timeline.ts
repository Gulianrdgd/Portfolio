interface TimelineItem {
	type: 'education' | 'project' | 'work';
	title: string;
	date: string;
	description: string;
	image: string;
	tags: string[];
}

export type { TimelineItem };
