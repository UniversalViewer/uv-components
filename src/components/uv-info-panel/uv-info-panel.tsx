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

  @Prop() manifest: string;

  async componentWillLoad(): Promise<void> {
    this.strings = await getLocaleComponentStrings(this.element);
  }

  private _renderMetadataGroup(metadataGroup: MetadataGroup) {

    return (
      <div class="group">
        <div class="header">{this.strings.metadataItemHeader}</div>
        <div class="items">{metadataGroup.id}</div>
      </div>
    );
  }

  render() {
    if (!this.metadataGroups.length) {
      return <span>nothing to show!</span>;
    } else {
      return this.metadataGroups.map((g: MetadataGroup) => {
        return this._renderMetadataGroup(g.resource);
      });
    }
  }
}
