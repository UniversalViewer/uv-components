import { Component, h, Prop, Element } from '@stencil/core';
import { MetadataGroup } from '../../MetadataGroup';
import { getLocaleComponentStrings } from '../../utils/locale';
import { ContentStrings } from '../../ContentStrings';

@Component({
  tag: 'uv-metadata-group',
  styleUrl: 'uv-metadata-group.css',
  shadow: true
})
export class UVMetadataGroup {

  @Element() element: HTMLElement;
  strings: ContentStrings;

  @Prop() metadata: MetadataGroup;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  render() {
    //console.log(this.metadata);
    var items = [];
    for (var i = 0; i < this.metadata.items.length; i++) {
      items[items.length] = <uv-metadata-item label={this.metadata.items[i].label} value={this.metadata.items[i].value} />;
    }
    return (
      <div class="group">
        <div class="header">{this.strings.metadataItemHeader}</div>
        {/* <div class="items">{this.metadataGroupId}</div> */}
        <div class="items">{items}</div>
      </div>
    )
  }
}
