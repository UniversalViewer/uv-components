import { Component, Prop, State } from '@stencil/core';
import { MetadataGroup } from '@iiif/manifold';

@Component({
  tag: 'iiif-metadata',
  styleUrl: 'iiif-metadata.css',
  shadow: true
})
export class IIIFMetadata {

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

 @State() metadataGroups: MetadataGroup[] = [];

  /**
   * The IIIF manifest
   */
  @Prop() manifest: string;

  componentDidLoad() {

    //var locale = manifesto.Utils.getInexactLocale("en-GB");

    const options: manifold.MetadataOptions = {
      canvases: null,
      licenseFormatter: null,
      range: null
    } as manifold.MetadataOptions;

    manifold.loadManifest({
      manifestUri: this.manifest
    }).then((helper) => {

      this.metadataGroups = helper.getMetadata(options);

    }).catch((e) => {
        console.error(e);
    });
  }

  render() {
    if (!this.metadataGroups.length) {
      return <span>nothing to show!</span>;
    } else {
      return this.metadataGroups.map((g: MetadataGroup) => {
        return <div>{g.resource.id}</div>;
      });
    }
  }
}
