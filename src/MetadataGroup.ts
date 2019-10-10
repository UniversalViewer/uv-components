import { MetadataItem } from "./MetadataItem";

export interface MetadataGroup {
  id: string;
	label?: string | undefined;
  items?: manifesto.LabelValuePair[];
  resource?: any;
}
