import { Component, h, Prop, Element } from '@stencil/core';
import { MetadataGroup } from '../../MetadataGroup';
import { getLocaleComponentStrings } from '../../utils/locale';
import { ContentStrings } from '../../ContentStrings';

@Component({
  tag: 'uv-info-panel',
  styleUrl: 'uv-info-panel.css',
  shadow: true
})
export class UVInfoPanel {

  @Element() element: HTMLElement;
  strings: ContentStrings;

  /*

  canvasDisplayOrder: "attribution, title",
  metadataGroupOrder: getGroupOrder(),
  canvases: canvases,
  canvasLabels: "Left page, Right page",
  //canvasExclude: "attribution",
  copyToClipboardEnabled: true,
  helper: helper,
  limitToRange: $('#limitToRange').is(':checked'),
  limitType: IIIFComponents.LimitType.LINES,
  //manifestDisplayOrder: "attribution, publication date, license, title",
  //manifestExclude: "license, attribution",
  range: getRange(helper),
  sanitizer: function (html) {
      return filterXSS(html, {
          whiteList: {
              a: ["href", "title", "target", "class"],
              br: [],
              img: ["src"],
              span: []
          }
      });
  },
  showAllLanguages: $('#allLanguages').is(':checked')

  */

  @Prop() metadataGroups: MetadataGroup[] = [];
  @Prop() showAllLanguages: boolean = false;
  @Prop() manifest: string;

  metadataGroup: MetadataGroup = {
    id: "test id"
  };

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  render() {
    if (!this.metadataGroups.length) {
      return <span>{this.strings.nothingToShow}</span>;
    } else {
      return this.metadataGroups.map((g: MetadataGroup) => {
        return <uv-metadata-group metadata={g}></uv-metadata-group>;
      });
    }
  }
}
