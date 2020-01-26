import { WebGLMap } from "@luciad/ria/view/WebGLMap";
import { getReference } from '@luciad/ria/reference/ReferenceProvider';
import { createBounds } from "@luciad/ria/shape/ShapeFactory";

import "./index.scss";

const root = document.getElementById("root");

const mapElement = document.createElement("div");
mapElement.classList.add("LuciadMap");
root.appendChild(mapElement);

const map = new WebGLMap(mapElement, {reference: getReference("EPSG:4978")});
map.mapNavigator.fit({bounds: createBounds(getReference("CRS:84"), [-122, 60, 25, 30])});
