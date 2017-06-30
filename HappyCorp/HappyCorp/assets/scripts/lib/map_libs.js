(function () {
    var d = null; function e(a) { return function (b) { this[a] = b } } function h(a) { return function () { return this[a] } } var j;
    function k(a, b, c) {
        this.extend(k, google.maps.OverlayView); this.c = a; this.a = []; this.f = []; this.ca = [53, 56, 66, 78, 90]; this.j = []; this.A = !1; c = c || {}; this.g = c.gridSize || 60; this.l = c.minimumClusterSize || 2; this.J = c.maxZoom || d; this.j = c.styles || []; this.X = c.imagePath || this.Q; this.W = c.imageExtension || this.P; this.O = !0; if (c.zoomOnClick != void 0) this.O = c.zoomOnClick; this.r = !1; if (c.averageCenter != void 0) this.r = c.averageCenter; l(this); this.setMap(a); this.K = this.c.getZoom(); var f = this; google.maps.event.addListener(this.c,
        "zoom_changed", function () { var a = f.c.getZoom(); if (f.K != a) f.K = a, f.m() }); google.maps.event.addListener(this.c, "idle", function () { f.i() }); b && b.length && this.C(b, !1)
    } j = k.prototype; j.Q = "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m"; j.P = "png"; j.extend = function (a, b) { return function (a) { for (var b in a.prototype) this.prototype[b] = a.prototype[b]; return this }.apply(a, [b]) }; j.onAdd = function () { if (!this.A) this.A = !0, n(this) }; j.draw = function () { };
    function l(a) { if (!a.j.length) for (var b = 0, c; c = a.ca[b]; b++) a.j.push({ url: a.X + (b + 1) + "." + a.W, height: c, width: c }) } j.S = function () { for (var a = this.o(), b = new google.maps.LatLngBounds, c = 0, f; f = a[c]; c++) b.extend(f.getPosition()); this.c.fitBounds(b) }; j.z = h("j"); j.o = h("a"); j.V = function () { return this.a.length }; j.ba = e("J"); j.I = h("J"); j.G = function (a, b) { for (var c = 0, f = a.length, g = f; g !== 0;) g = parseInt(g / 10, 10), c++; c = Math.min(c, b); return { text: f, index: c } }; j.$ = e("G"); j.H = h("G");
    j.C = function (a, b) { for (var c = 0, f; f = a[c]; c++) q(this, f); b || this.i() }; function q(a, b) { b.s = !1; b.draggable && google.maps.event.addListener(b, "dragend", function () { b.s = !1; a.L() }); a.a.push(b) } j.q = function (a, b) { q(this, a); b || this.i() }; function r(a, b) { var c = -1; if (a.a.indexOf) c = a.a.indexOf(b); else for (var f = 0, g; g = a.a[f]; f++) if (g == b) { c = f; break } if (c == -1) return !1; b.setMap(d); a.a.splice(c, 1); return !0 } j.Y = function (a, b) { var c = r(this, a); return !b && c ? (this.m(), this.i(), !0) : !1 };
    j.Z = function (a, b) { for (var c = !1, f = 0, g; g = a[f]; f++) g = r(this, g), c = c || g; if (!b && c) return this.m(), this.i(), !0 }; j.U = function () { return this.f.length }; j.getMap = h("c"); j.setMap = e("c"); j.w = h("g"); j.aa = e("g");
    j.v = function (a) { var b = this.getProjection(), c = new google.maps.LatLng(a.getNorthEast().lat(), a.getNorthEast().lng()), f = new google.maps.LatLng(a.getSouthWest().lat(), a.getSouthWest().lng()), c = b.fromLatLngToDivPixel(c); c.x += this.g; c.y -= this.g; f = b.fromLatLngToDivPixel(f); f.x -= this.g; f.y += this.g; c = b.fromDivPixelToLatLng(c); b = b.fromDivPixelToLatLng(f); a.extend(c); a.extend(b); return a }; j.R = function () { this.m(!0); this.a = [] };
    j.m = function (a) { for (var b = 0, c; c = this.f[b]; b++) c.remove(); for (b = 0; c = this.a[b]; b++) c.s = !1, a && c.setMap(d); this.f = [] }; j.L = function () { var a = this.f.slice(); this.f.length = 0; this.m(); this.i(); window.setTimeout(function () { for (var b = 0, c; c = a[b]; b++) c.remove() }, 0) }; j.i = function () { n(this) };
    function n(a) {
        if (a.A) for (var b = a.v(new google.maps.LatLngBounds(a.c.getBounds().getSouthWest(), a.c.getBounds().getNorthEast())), c = 0, f; f = a.a[c]; c++) if (!f.s && b.contains(f.getPosition())) {
            for (var g = a, u = 4E4, o = d, v = 0, m = void 0; m = g.f[v]; v++) {
                var i = m.getCenter(); if (i) {
                    var p = f.getPosition(); if (!i || !p) i = 0; else var w = (p.lat() - i.lat()) * Math.PI / 180, x = (p.lng() - i.lng()) * Math.PI / 180, i = Math.sin(w / 2) * Math.sin(w / 2) + Math.cos(i.lat() * Math.PI / 180) * Math.cos(p.lat() * Math.PI / 180) * Math.sin(x / 2) * Math.sin(x / 2), i = 6371 * 2 * Math.atan2(Math.sqrt(i),
                    Math.sqrt(1 - i)); i < u && (u = i, o = m)
                }
            } o && o.F.contains(f.getPosition()) ? o.q(f) : (m = new s(g), m.q(f), g.f.push(m))
        }
    } function s(a) { this.k = a; this.c = a.getMap(); this.g = a.w(); this.l = a.l; this.r = a.r; this.d = d; this.a = []; this.F = d; this.n = new t(this, a.z(), a.w()) } j = s.prototype;
    j.q = function (a) {
        var b; a: if (this.a.indexOf) b = this.a.indexOf(a) != -1; else { b = 0; for (var c; c = this.a[b]; b++) if (c == a) { b = !0; break a } b = !1 } if (b) return !1; if (this.d) { if (this.r) c = this.a.length + 1, b = (this.d.lat() * (c - 1) + a.getPosition().lat()) / c, c = (this.d.lng() * (c - 1) + a.getPosition().lng()) / c, this.d = new google.maps.LatLng(b, c), y(this) } else this.d = a.getPosition(), y(this); a.s = !0; this.a.push(a); b = this.a.length; b < this.l && a.getMap() != this.c && a.setMap(this.c); if (b == this.l) for (c = 0; c < b; c++) this.a[c].setMap(d); b >= this.l && a.setMap(d);
        a = this.c.getZoom(); if ((b = this.k.I()) && a > b) for (a = 0; b = this.a[a]; a++) b.setMap(this.c); else if (this.a.length < this.l) z(this.n); else { b = this.k.H()(this.a, this.k.z().length); this.n.setCenter(this.d); a = this.n; a.B = b; a.ga = b.text; a.ea = b.index; if (a.b) a.b.innerHTML = b.text; b = Math.max(0, a.B.index - 1); b = Math.min(a.j.length - 1, b); b = a.j[b]; a.da = b.url; a.h = b.height; a.p = b.width; a.M = b.textColor; a.e = b.anchor; a.N = b.textSize; a.D = b.backgroundPosition; this.n.show() } return !0
    };
    j.getBounds = function () { for (var a = new google.maps.LatLngBounds(this.d, this.d), b = this.o(), c = 0, f; f = b[c]; c++) a.extend(f.getPosition()); return a }; j.remove = function () { this.n.remove(); this.a.length = 0; delete this.a }; j.T = function () { return this.a.length }; j.o = h("a"); j.getCenter = h("d"); function y(a) { a.F = a.k.v(new google.maps.LatLngBounds(a.d, a.d)) } j.getMap = h("c");
    function t(a, b, c) { a.k.extend(t, google.maps.OverlayView); this.j = b; this.fa = c || 0; this.u = a; this.d = d; this.c = a.getMap(); this.B = this.b = d; this.t = !1; this.setMap(this.c) } j = t.prototype;
    j.onAdd = function () { this.b = document.createElement("DIV"); if (this.t) this.b.style.cssText = A(this, B(this, this.d)), this.b.innerHTML = this.B.text; this.getPanes().overlayMouseTarget.appendChild(this.b); var a = this; google.maps.event.addDomListener(this.b, "click", function () { var b = a.u.k; google.maps.event.trigger(b, "clusterclick", a.u); b.O && a.c.fitBounds(a.u.getBounds()) }) }; function B(a, b) { var c = a.getProjection().fromLatLngToDivPixel(b); c.x -= parseInt(a.p / 2, 10); c.y -= parseInt(a.h / 2, 10); return c }
    j.draw = function () { if (this.t) { var a = B(this, this.d); this.b.style.top = a.y + "px"; this.b.style.left = a.x + "px" } }; function z(a) { if (a.b) a.b.style.display = "none"; a.t = !1 } j.show = function () { if (this.b) this.b.style.cssText = A(this, B(this, this.d)), this.b.style.display = ""; this.t = !0 }; j.remove = function () { this.setMap(d) }; j.onRemove = function () { if (this.b && this.b.parentNode) z(this), this.b.parentNode.removeChild(this.b), this.b = d }; j.setCenter = e("d");
    function A(a, b) {
        var c = []; c.push("background-image:url(" + a.da + ");"); c.push("background-position:" + (a.D ? a.D : "0 0") + ";"); typeof a.e === "object" ? (typeof a.e[0] === "number" && a.e[0] > 0 && a.e[0] < a.h ? c.push("height:" + (a.h - a.e[0]) + "px; padding-top:" + a.e[0] + "px;") : c.push("height:" + a.h + "px; line-height:" + a.h + "px;"), typeof a.e[1] === "number" && a.e[1] > 0 && a.e[1] < a.p ? c.push("width:" + (a.p - a.e[1]) + "px; padding-left:" + a.e[1] + "px;") : c.push("width:" + a.p + "px; text-align:center;")) : c.push("height:" + a.h + "px; line-height:" + a.h +
        "px; width:" + a.p + "px; text-align:center;"); c.push("cursor:pointer; top:" + b.y + "px; left:" + b.x + "px; color:" + (a.M ? a.M : "black") + "; position:absolute; font-size:" + (a.N ? a.N : 11) + "px; font-family:Arial,sans-serif; font-weight:bold"); return c.join("")
    } window.MarkerClusterer = k; k.prototype.addMarker = k.prototype.q; k.prototype.addMarkers = k.prototype.C; k.prototype.clearMarkers = k.prototype.R; k.prototype.fitMapToMarkers = k.prototype.S; k.prototype.getCalculator = k.prototype.H; k.prototype.getGridSize = k.prototype.w;
    k.prototype.getExtendedBounds = k.prototype.v; k.prototype.getMap = k.prototype.getMap; k.prototype.getMarkers = k.prototype.o; k.prototype.getMaxZoom = k.prototype.I; k.prototype.getStyles = k.prototype.z; k.prototype.getTotalClusters = k.prototype.U; k.prototype.getTotalMarkers = k.prototype.V; k.prototype.redraw = k.prototype.i; k.prototype.removeMarker = k.prototype.Y; k.prototype.removeMarkers = k.prototype.Z; k.prototype.resetViewport = k.prototype.m; k.prototype.repaint = k.prototype.L; k.prototype.setCalculator = k.prototype.$;
    k.prototype.setGridSize = k.prototype.aa; k.prototype.setMaxZoom = k.prototype.ba; k.prototype.onAdd = k.prototype.onAdd; k.prototype.draw = k.prototype.draw; s.prototype.getCenter = s.prototype.getCenter; s.prototype.getSize = s.prototype.T; s.prototype.getMarkers = s.prototype.o; t.prototype.onAdd = t.prototype.onAdd; t.prototype.draw = t.prototype.draw; t.prototype.onRemove = t.prototype.onRemove;
})();


/**
 * @name InfoBox
 * @version 1.1.11 [January 9, 2012]
 * @author Gary Little (inspired by proof-of-concept code from Pamela Fox of Google)
 * @copyright Copyright 2010 Gary Little [gary at luxcentral.com]
 * @fileoverview InfoBox extends the Google Maps JavaScript API V3 <tt>OverlayView</tt> class.
 *  <p>
 *  An InfoBox behaves like a <tt>google.maps.InfoWindow</tt>, but it supports several
 *  additional properties for advanced styling. An InfoBox can also be used as a map label.
 *  <p>
 *  An InfoBox also fires the same events as a <tt>google.maps.InfoWindow</tt>.
 */

/*!
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jslint browser:true */
/*global google */

/**
 * @name InfoBoxOptions
 * @class This class represents the optional parameter passed to the {@link InfoBox} constructor.
 * @property {string|Node} content The content of the InfoBox (plain text or an HTML DOM node).
 * @property {boolean} disableAutoPan Disable auto-pan on <tt>open</tt> (default is <tt>false</tt>).
 * @property {number} maxWidth The maximum width (in pixels) of the InfoBox. Set to 0 if no maximum.
 * @property {Size} pixelOffset The offset (in pixels) from the top left corner of the InfoBox
 *  (or the bottom left corner if the <code>alignBottom</code> property is <code>true</code>)
 *  to the map pixel corresponding to <tt>position</tt>.
 * @property {LatLng} position The geographic location at which to display the InfoBox.
 * @property {number} zIndex The CSS z-index style value for the InfoBox.
 *  Note: This value overrides a zIndex setting specified in the <tt>boxStyle</tt> property.
 * @property {string} boxClass The name of the CSS class defining the styles for the InfoBox container.
 *  The default name is <code>infoBox</code>.
 * @property {Object} [boxStyle] An object literal whose properties define specific CSS
 *  style values to be applied to the InfoBox. Style values defined here override those that may
 *  be defined in the <code>boxClass</code> style sheet. If this property is changed after the
 *  InfoBox has been created, all previously set styles (except those defined in the style sheet)
 *  are removed from the InfoBox before the new style values are applied.
 * @property {string} closeBoxMargin The CSS margin style value for the close box.
 *  The default is "2px" (a 2-pixel margin on all sides).
 * @property {string} closeBoxURL The URL of the image representing the close box.
 *  Note: The default is the URL for Google's standard close box.
 *  Set this property to "" if no close box is required.
 * @property {Size} infoBoxClearance Minimum offset (in pixels) from the InfoBox to the
 *  map edge after an auto-pan.
 * @property {boolean} isHidden Hide the InfoBox on <tt>open</tt> (default is <tt>false</tt>).
 * @property {boolean} alignBottom Align the bottom left corner of the InfoBox to the <code>position</code>
 *  location (default is <tt>false</tt> which means that the top left corner of the InfoBox is aligned).
 * @property {string} pane The pane where the InfoBox is to appear (default is "floatPane").
 *  Set the pane to "mapPane" if the InfoBox is being used as a map label.
 *  Valid pane names are the property names for the <tt>google.maps.MapPanes</tt> object.
 * @property {boolean} enableEventPropagation Propagate mousedown, mousemove, mouseover, mouseout,
 *  mouseup, click, dblclick, touchstart, touchend, touchmove, and contextmenu events in the InfoBox
 *  (default is <tt>false</tt> to mimic the behavior of a <tt>google.maps.InfoWindow</tt>). Set
 *  this property to <tt>true</tt> if the InfoBox is being used as a map label.
 */

/**
 * Creates an InfoBox with the options specified in {@link InfoBoxOptions}.
 *  Call <tt>InfoBox.open</tt> to add the box to the map.
 * @constructor
 * @param {InfoBoxOptions} [opt_opts]
 */
function InfoBox(opt_opts) {

    opt_opts = opt_opts || {};

    google.maps.OverlayView.apply(this, arguments);

    // Standard options (in common with google.maps.InfoWindow):
    //
    this.content_ = opt_opts.content || "";
    this.disableAutoPan_ = opt_opts.disableAutoPan || false;
    this.maxWidth_ = opt_opts.maxWidth || 0;
    this.pixelOffset_ = opt_opts.pixelOffset || new google.maps.Size(0, 0);
    this.position_ = opt_opts.position || new google.maps.LatLng(0, 0);
    this.zIndex_ = opt_opts.zIndex || null;

    // Additional options (unique to InfoBox):
    //
    this.boxClass_ = opt_opts.boxClass || "infoBox";
    this.boxStyle_ = opt_opts.boxStyle || {};
    this.closeBoxMargin_ = opt_opts.closeBoxMargin || "2px";
    this.closeBoxURL_ = opt_opts.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif";
    if (opt_opts.closeBoxURL === "") {
        this.closeBoxURL_ = "";
    }
    this.infoBoxClearance_ = opt_opts.infoBoxClearance || new google.maps.Size(1, 1);
    this.isHidden_ = opt_opts.isHidden || false;
    this.alignBottom_ = opt_opts.alignBottom || false;
    this.pane_ = opt_opts.pane || "floatPane";
    this.enableEventPropagation_ = opt_opts.enableEventPropagation || false;

    this.div_ = null;
    this.closeListener_ = null;
    this.moveListener_ = null;
    this.contextListener_ = null;
    this.eventListeners_ = null;
    this.fixedWidthSet_ = null;
}

/* InfoBox extends OverlayView in the Google Maps API v3.
 */
InfoBox.prototype = new google.maps.OverlayView();

/**
 * Creates the DIV representing the InfoBox.
 * @private
 */
InfoBox.prototype.createInfoBoxDiv_ = function () {

    var i;
    var events;
    var bw;
    var me = this;

    // This handler prevents an event in the InfoBox from being passed on to the map.
    //
    var cancelHandler = function (e) {
        e.cancelBubble = true;
        if (e.stopPropagation) {
            e.stopPropagation();
        }
    };

    // This handler ignores the current event in the InfoBox and conditionally prevents
    // the event from being passed on to the map. It is used for the contextmenu event.
    //
    var ignoreHandler = function (e) {

        e.returnValue = false;

        if (e.preventDefault) {

            e.preventDefault();
        }

        if (!me.enableEventPropagation_) {

            cancelHandler(e);
        }
    };

    if (!this.div_) {

        this.div_ = document.createElement("div");

        this.setBoxStyle_();

        if (typeof this.content_.nodeType === "undefined") {
            this.div_.innerHTML = this.getCloseBoxImg_() + this.content_;
        } else {
            this.div_.innerHTML = this.getCloseBoxImg_();
            this.div_.appendChild(this.content_);
        }

        // Add the InfoBox DIV to the DOM
        this.getPanes()[this.pane_].appendChild(this.div_);

        this.addClickHandler_();

        if (this.div_.style.width) {

            this.fixedWidthSet_ = true;

        } else {

            if (this.maxWidth_ !== 0 && this.div_.offsetWidth > this.maxWidth_) {

                this.div_.style.width = this.maxWidth_;
                this.div_.style.overflow = "auto";
                this.fixedWidthSet_ = true;

            } else { // The following code is needed to overcome problems with MSIE

                bw = this.getBoxWidths_();

                this.div_.style.width = (this.div_.offsetWidth - bw.left - bw.right) + "px";
                this.fixedWidthSet_ = false;
            }
        }

        this.panBox_(this.disableAutoPan_);

        if (!this.enableEventPropagation_) {

            this.eventListeners_ = [];

            // Cancel event propagation.
            //
            // Note: mousemove not included (to resolve Issue 152)
            events = ["mousedown", "mouseover", "mouseout", "mouseup",
            "click", "dblclick", "touchstart", "touchend", "touchmove"];

            for (i = 0; i < events.length; i++) {

                this.eventListeners_.push(google.maps.event.addDomListener(this.div_, events[i], cancelHandler));
            }

            // Workaround for Google bug that causes the cursor to change to a pointer
            // when the mouse moves over a marker underneath InfoBox.
            this.eventListeners_.push(google.maps.event.addDomListener(this.div_, "mouseover", function (e) {
                this.style.cursor = "default";
            }));
        }

        this.contextListener_ = google.maps.event.addDomListener(this.div_, "contextmenu", ignoreHandler);

        /**
         * This event is fired when the DIV containing the InfoBox's content is attached to the DOM.
         * @name InfoBox#domready
         * @event
         */
        google.maps.event.trigger(this, "domready");
    }
};

/**
 * Returns the HTML <IMG> tag for the close box.
 * @private
 */
InfoBox.prototype.getCloseBoxImg_ = function () {

    var img = "";

    if (this.closeBoxURL_ !== "") {

        img = "<img";
        img += " src='" + this.closeBoxURL_ + "'";
        img += " align=right"; // Do this because Opera chokes on style='float: right;'
        img += " style='";
        img += " position: relative;"; // Required by MSIE
        img += " cursor: pointer;";
        img += " margin: " + this.closeBoxMargin_ + ";";
        img += "'>";
    }

    return img;
};

/**
 * Adds the click handler to the InfoBox close box.
 * @private
 */
InfoBox.prototype.addClickHandler_ = function () {

    var closeBox;

    if (this.closeBoxURL_ !== "") {

        closeBox = this.div_.firstChild;
        this.closeListener_ = google.maps.event.addDomListener(closeBox, 'click', this.getCloseClickHandler_());

    } else {

        this.closeListener_ = null;
    }
};

/**
 * Returns the function to call when the user clicks the close box of an InfoBox.
 * @private
 */
InfoBox.prototype.getCloseClickHandler_ = function () {

    var me = this;

    return function (e) {

        // 1.0.3 fix: Always prevent propagation of a close box click to the map:
        e.cancelBubble = true;

        if (e.stopPropagation) {

            e.stopPropagation();
        }

        /**
         * This event is fired when the InfoBox's close box is clicked.
         * @name InfoBox#closeclick
         * @event
         */
        google.maps.event.trigger(me, "closeclick");

        me.close();
    };
};

/**
 * Pans the map so that the InfoBox appears entirely within the map's visible area.
 * @private
 */
InfoBox.prototype.panBox_ = function (disablePan) {

    var map;
    var bounds;
    var xOffset = 0, yOffset = 0;

    if (!disablePan) {

        map = this.getMap();

        if (map instanceof google.maps.Map) { // Only pan if attached to map, not panorama

            if (!map.getBounds().contains(this.position_)) {
                // Marker not in visible area of map, so set center
                // of map to the marker position first.
                map.setCenter(this.position_);
            }

            bounds = map.getBounds();

            var mapDiv = map.getDiv();
            var mapWidth = mapDiv.offsetWidth;
            var mapHeight = mapDiv.offsetHeight;
            var iwOffsetX = this.pixelOffset_.width;
            var iwOffsetY = this.pixelOffset_.height;
            var iwWidth = this.div_.offsetWidth;
            var iwHeight = this.div_.offsetHeight;
            var padX = this.infoBoxClearance_.width;
            var padY = this.infoBoxClearance_.height;
            var pixPosition = this.getProjection().fromLatLngToContainerPixel(this.position_);

            if (pixPosition.x < (-iwOffsetX + padX)) {
                xOffset = pixPosition.x + iwOffsetX - padX;
            } else if ((pixPosition.x + iwWidth + iwOffsetX + padX) > mapWidth) {
                xOffset = pixPosition.x + iwWidth + iwOffsetX + padX - mapWidth;
            }
            if (this.alignBottom_) {
                if (pixPosition.y < (-iwOffsetY + padY + iwHeight)) {
                    yOffset = pixPosition.y + iwOffsetY - padY - iwHeight;
                } else if ((pixPosition.y + iwOffsetY + padY) > mapHeight) {
                    yOffset = pixPosition.y + iwOffsetY + padY - mapHeight;
                }
            } else {
                if (pixPosition.y < (-iwOffsetY + padY)) {
                    yOffset = pixPosition.y + iwOffsetY - padY;
                } else if ((pixPosition.y + iwHeight + iwOffsetY + padY) > mapHeight) {
                    yOffset = pixPosition.y + iwHeight + iwOffsetY + padY - mapHeight;
                }
            }

            if (!(xOffset === 0 && yOffset === 0)) {

                // Move the map to the shifted center.
                //
                var c = map.getCenter();
                map.panBy(xOffset, yOffset);
            }
        }
    }
};

/**
 * Sets the style of the InfoBox by setting the style sheet and applying
 * other specific styles requested.
 * @private
 */
InfoBox.prototype.setBoxStyle_ = function () {

    var i, boxStyle;

    if (this.div_) {

        // Apply style values from the style sheet defined in the boxClass parameter:
        this.div_.className = this.boxClass_;

        // Clear existing inline style values:
        this.div_.style.cssText = "";

        // Apply style values defined in the boxStyle parameter:
        boxStyle = this.boxStyle_;
        for (i in boxStyle) {

            if (boxStyle.hasOwnProperty(i)) {

                this.div_.style[i] = boxStyle[i];
            }
        }

        // Fix up opacity style for benefit of MSIE:
        //
        if (typeof this.div_.style.opacity !== "undefined" && this.div_.style.opacity !== "") {

            this.div_.style.filter = "alpha(opacity=" + (this.div_.style.opacity * 100) + ")";
        }

        // Apply required styles:
        //
        this.div_.style.position = "absolute";
        this.div_.style.visibility = 'hidden';
        if (this.zIndex_ !== null) {

            this.div_.style.zIndex = this.zIndex_;
        }
    }
};

/**
 * Get the widths of the borders of the InfoBox.
 * @private
 * @return {Object} widths object (top, bottom left, right)
 */
InfoBox.prototype.getBoxWidths_ = function () {

    var computedStyle;
    var bw = { top: 0, bottom: 0, left: 0, right: 0 };
    var box = this.div_;

    if (document.defaultView && document.defaultView.getComputedStyle) {

        computedStyle = box.ownerDocument.defaultView.getComputedStyle(box, "");

        if (computedStyle) {

            // The computed styles are always in pixel units (good!)
            bw.top = parseInt(computedStyle.borderTopWidth, 10) || 0;
            bw.bottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
            bw.left = parseInt(computedStyle.borderLeftWidth, 10) || 0;
            bw.right = parseInt(computedStyle.borderRightWidth, 10) || 0;
        }

    } else if (document.documentElement.currentStyle) { // MSIE

        if (box.currentStyle) {

            // The current styles may not be in pixel units, but assume they are (bad!)
            bw.top = parseInt(box.currentStyle.borderTopWidth, 10) || 0;
            bw.bottom = parseInt(box.currentStyle.borderBottomWidth, 10) || 0;
            bw.left = parseInt(box.currentStyle.borderLeftWidth, 10) || 0;
            bw.right = parseInt(box.currentStyle.borderRightWidth, 10) || 0;
        }
    }

    return bw;
};

/**
 * Invoked when <tt>close</tt> is called. Do not call it directly.
 */
InfoBox.prototype.onRemove = function () {

    if (this.div_) {

        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    }
};

/**
 * Draws the InfoBox based on the current map projection and zoom level.
 */
InfoBox.prototype.draw = function () {

    this.createInfoBoxDiv_();

    var pixPosition = this.getProjection().fromLatLngToDivPixel(this.position_);

    this.div_.style.left = (pixPosition.x + this.pixelOffset_.width) + "px";

    if (this.alignBottom_) {
        this.div_.style.bottom = -(pixPosition.y + this.pixelOffset_.height) + "px";
    } else {
        this.div_.style.top = (pixPosition.y + this.pixelOffset_.height) + "px";
    }

    if (this.isHidden_) {

        this.div_.style.visibility = 'hidden';

    } else {

        this.div_.style.visibility = "visible";
    }
};

/**
 * Sets the options for the InfoBox. Note that changes to the <tt>maxWidth</tt>,
 *  <tt>closeBoxMargin</tt>, <tt>closeBoxURL</tt>, and <tt>enableEventPropagation</tt>
 *  properties have no affect until the current InfoBox is <tt>close</tt>d and a new one
 *  is <tt>open</tt>ed.
 * @param {InfoBoxOptions} opt_opts
 */
InfoBox.prototype.setOptions = function (opt_opts) {
    if (typeof opt_opts.boxClass !== "undefined") { // Must be first

        this.boxClass_ = opt_opts.boxClass;
        this.setBoxStyle_();
    }
    if (typeof opt_opts.boxStyle !== "undefined") { // Must be second

        this.boxStyle_ = opt_opts.boxStyle;
        this.setBoxStyle_();
    }
    if (typeof opt_opts.content !== "undefined") {

        this.setContent(opt_opts.content);
    }
    if (typeof opt_opts.disableAutoPan !== "undefined") {

        this.disableAutoPan_ = opt_opts.disableAutoPan;
    }
    if (typeof opt_opts.maxWidth !== "undefined") {

        this.maxWidth_ = opt_opts.maxWidth;
    }
    if (typeof opt_opts.pixelOffset !== "undefined") {

        this.pixelOffset_ = opt_opts.pixelOffset;
    }
    if (typeof opt_opts.alignBottom !== "undefined") {

        this.alignBottom_ = opt_opts.alignBottom;
    }
    if (typeof opt_opts.position !== "undefined") {

        this.setPosition(opt_opts.position);
    }
    if (typeof opt_opts.zIndex !== "undefined") {

        this.setZIndex(opt_opts.zIndex);
    }
    if (typeof opt_opts.closeBoxMargin !== "undefined") {

        this.closeBoxMargin_ = opt_opts.closeBoxMargin;
    }
    if (typeof opt_opts.closeBoxURL !== "undefined") {

        this.closeBoxURL_ = opt_opts.closeBoxURL;
    }
    if (typeof opt_opts.infoBoxClearance !== "undefined") {

        this.infoBoxClearance_ = opt_opts.infoBoxClearance;
    }
    if (typeof opt_opts.isHidden !== "undefined") {

        this.isHidden_ = opt_opts.isHidden;
    }
    if (typeof opt_opts.enableEventPropagation !== "undefined") {

        this.enableEventPropagation_ = opt_opts.enableEventPropagation;
    }

    if (this.div_) {

        this.draw();
    }
};

/**
 * Sets the content of the InfoBox.
 *  The content can be plain text or an HTML DOM node.
 * @param {string|Node} content
 */
InfoBox.prototype.setContent = function (content) {
    this.content_ = content;

    if (this.div_) {

        if (this.closeListener_) {

            google.maps.event.removeListener(this.closeListener_);
            this.closeListener_ = null;
        }

        // Odd code required to make things work with MSIE.
        //
        if (!this.fixedWidthSet_) {

            this.div_.style.width = "";
        }

        if (typeof content.nodeType === "undefined") {
            this.div_.innerHTML = this.getCloseBoxImg_() + content;
        } else {
            this.div_.innerHTML = this.getCloseBoxImg_();
            this.div_.appendChild(content);
        }

        // Perverse code required to make things work with MSIE.
        // (Ensures the close box does, in fact, float to the right.)
        //
        if (!this.fixedWidthSet_) {
            this.div_.style.width = this.div_.offsetWidth + "px";
            if (typeof content.nodeType === "undefined") {
                this.div_.innerHTML = this.getCloseBoxImg_() + content;
            } else {
                this.div_.innerHTML = this.getCloseBoxImg_();
                this.div_.appendChild(content);
            }
        }

        this.addClickHandler_();
    }

    /**
     * This event is fired when the content of the InfoBox changes.
     * @name InfoBox#content_changed
     * @event
     */
    google.maps.event.trigger(this, "content_changed");
};

/**
 * Sets the geographic location of the InfoBox.
 * @param {LatLng} latlng
 */
InfoBox.prototype.setPosition = function (latlng) {

    this.position_ = latlng;

    if (this.div_) {

        this.draw();
    }

    /**
     * This event is fired when the position of the InfoBox changes.
     * @name InfoBox#position_changed
     * @event
     */
    google.maps.event.trigger(this, "position_changed");
};

/**
 * Sets the zIndex style for the InfoBox.
 * @param {number} index
 */
InfoBox.prototype.setZIndex = function (index) {

    this.zIndex_ = index;

    if (this.div_) {

        this.div_.style.zIndex = index;
    }

    /**
     * This event is fired when the zIndex of the InfoBox changes.
     * @name InfoBox#zindex_changed
     * @event
     */
    google.maps.event.trigger(this, "zindex_changed");
};

/**
 * Returns the content of the InfoBox.
 * @returns {string}
 */
InfoBox.prototype.getContent = function () {

    return this.content_;
};

/**
 * Returns the geographic location of the InfoBox.
 * @returns {LatLng}
 */
InfoBox.prototype.getPosition = function () {

    return this.position_;
};

/**
 * Returns the zIndex for the InfoBox.
 * @returns {number}
 */
InfoBox.prototype.getZIndex = function () {

    return this.zIndex_;
};

/**
 * Shows the InfoBox.
 */
InfoBox.prototype.show = function () {

    this.isHidden_ = false;
    if (this.div_) {
        this.div_.style.visibility = "visible";
    }
};

/**
 * Hides the InfoBox.
 */
InfoBox.prototype.hide = function () {

    this.isHidden_ = true;
    if (this.div_) {
        this.div_.style.visibility = "hidden";
    }
};

/**
 * Adds the InfoBox to the specified map or Street View panorama. If <tt>anchor</tt>
 *  (usually a <tt>google.maps.Marker</tt>) is specified, the position
 *  of the InfoBox is set to the position of the <tt>anchor</tt>. If the
 *  anchor is dragged to a new location, the InfoBox moves as well.
 * @param {Map|StreetViewPanorama} map
 * @param {MVCObject} [anchor]
 */
InfoBox.prototype.open = function (map, anchor) {

    var me = this;

    if (anchor) {

        this.position_ = anchor.getPosition();
        this.moveListener_ = google.maps.event.addListener(anchor, "position_changed", function () {
            me.setPosition(this.getPosition());
        });
    }

    this.setMap(map);

    if (this.div_) {

        this.panBox_();
    }
};

/**
 * Removes the InfoBox from the map.
 */
InfoBox.prototype.close = function () {

    var i;

    if (this.closeListener_) {

        google.maps.event.removeListener(this.closeListener_);
        this.closeListener_ = null;
    }

    if (this.eventListeners_) {

        for (i = 0; i < this.eventListeners_.length; i++) {

            google.maps.event.removeListener(this.eventListeners_[i]);
        }
        this.eventListeners_ = null;
    }

    if (this.moveListener_) {

        google.maps.event.removeListener(this.moveListener_);
        this.moveListener_ = null;
    }

    if (this.contextListener_) {

        google.maps.event.removeListener(this.contextListener_);
        this.contextListener_ = null;
    }

    this.setMap(null);
};
