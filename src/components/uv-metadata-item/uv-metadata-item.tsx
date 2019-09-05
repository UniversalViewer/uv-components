import { Component, h, Prop, Element } from '@stencil/core';
import { getLocaleComponentStrings } from '../../utils/locale';
import { ContentStrings } from '../../ContentStrings';

@Component({
  tag: 'uv-metadata-item',
  styleUrl: 'uv-metadata-item.css',
  shadow: true
})
export class UVMetadataItem {

  @Element() element: HTMLElement;
  strings: ContentStrings;

  @Prop() label: string;
  @Prop() value: string;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  render() {
    console.log(this.label, this.value);
    var label = this.label;
    var value = this.value;
    return (
        <div class="item">
          <div class="label">{label}</div>
          <div class="values">{value}</div>
        </div>
    );
  }
}
