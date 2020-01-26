import { WebGLMap } from "@luciad/ria/view/WebGLMap";
import * as ReferenceProvider from '@luciad/ria/reference/ReferenceProvider';

import "./index.scss";
import {getReference} from "@luciad/ria/reference/ReferenceProvider";

const root = document.getElementById("root");

const mapElement = document.createElement("div");
mapElement.classList.add("LuciadMap");
root.appendChild(element);

new WebGLMap(mapElement, {reference: ReferenceProvider.getReference("EPSG:4978")});
