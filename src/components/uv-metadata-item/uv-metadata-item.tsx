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

  @Prop() label: manifesto.LanguageMap;
  @Prop() value: manifesto.LanguageMap;
/*
  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }
*/
  render() {
    // var label = "Foo"; //this.label;
    // var value = "Bar"; //this.value;
    return (
        <div class="item">
          <div class="label">{manifesto.LanguageMap.getValue(this.label, "en")}</div>
          <div class="value">{manifesto.LanguageMap.getValue(this.value, "en")}</div>
        </div>
    );
  }
}
