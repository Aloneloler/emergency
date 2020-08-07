/* eslint-disable no-useless-constructor */
import React from 'react';
import { connect } from 'dva';
import DeckGL from 'deck.gl';
import { WebMercatorViewport } from '@deck.gl/core';
import MapGL, { StaticMap } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import { INITIAL_VIEW_STATE, MAPBOX_TOKEN, MAP_STYLE } from '@/utils/publickPage';
// import GL from '@luma.gl/constants';
function mapStateToProps({ globalModel, globalMapModel }) {
  return {
    globalModel: globalModel,
    globalMapModel: globalMapModel,
  };
}
@connect(mapStateToProps)
class MapModel extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.oncontextmenu = function(e) {
      e.preventDefault();
    };
  }
  //初次加载完成的回调函数
  initMapCallback = event => {
    let { dispatch, initCallback } = this.props;
    let mapObj = null;
    if (event) {
      mapObj = event.getMap();
      dispatch({ type: 'globalMapModel/setMapObj', payload: mapObj });
      if (initCallback && mapObj) {
        if (mapObj.loaded()) {
          mapObj.on('load', () => {
            initCallback(mapObj);
          });
        } else {
          initCallback(mapObj);
        }
      }
    }
  };
  //滑动
  _onViewStateChange({ viewState }) {
    let { activeLayerObj } = this.props.globalMapModel;
    let { x, y, object, lngLat } = activeLayerObj;
    if (x && y && object) {
      let viewObj = new WebMercatorViewport(viewState);
      let arr = viewObj.project(lngLat);
      activeLayerObj = { ...activeLayerObj, x: arr[0], y: arr[1] };
      this.props.dispatch({
        type: 'globalMapModel/setActiveLayerObj',
        payload: activeLayerObj,
      });
    }
    this.props.dispatch({
      type: 'globalMapModel/setViewState',
      payload: viewState,
    });
  }
  //deckgl底图的滑动提示
  _onHover = event => {
    // console.log(event, 'event')
    // let { object } = event;
    // if (object) {
    //     let deckglOverlay = document.getElementById("deckgl-overlay");
    //     let deckglWrapper = document.getElementById("deckgl-wrapper");
    //     if (deckglOverlay && deckglWrapper) {
    //         deckglOverlay.style.cursor = 'default';
    //         deckglWrapper.style.cursor = 'default';
    //     }
    // }
  };
  //点击调用的函Click数
  //滑动点击提示框
  onClickFun = data => {
    let { object } = data;
    let obj = {
      lngLat: [0, 0],
      x: null,
      y: null,
      object: null,
    };
    if (object) {
      let { viewState } = this.props.globalMapModel;
      let viewObj = new WebMercatorViewport(viewState);
      let { geometry } = object;
      let { coordinates } = geometry;
      let { type } = geometry;

      let deckglWrapper = document.getElementById('deckgl-wrapper');
      if (deckglWrapper) {
        deckglWrapper.style.position = 'unset';
      }
      if (type === 'Point' || type === 'MultiPoint') {
        let arr = viewObj.project(coordinates);
        // console.log(arr, 'obj1')
        obj = {
          lngLat: coordinates,
          x: arr[0],
          y: arr[1],
          object: object,
        };
        console.log(obj,'zzzzzzzzz')
        this.props.dispatch({ type: 'globalMapModel/setActiveLayerObj', payload: obj });
      } else if (
        type === 'LineString' ||
        type === 'MultiLineString' ||
        type === 'Polygon' ||
        type === 'MultiPolygon'
      ) {
        // let { x, y, lngLat } = data;
        // console.log(obj, 'obj2')
        // obj = {
        //     lngLat: lngLat,
        //     x: x,
        //     y: y,
        //     object: object
        // }
      }
    } else {
      this.props.dispatch({ type: 'globalMapModel/setActiveLayerObj', payload: obj });
    }
  };
  render() {
    const { viewState, deckLayerArr, trackingLayerArr } = this.props.globalMapModel;
    return (
      <React.Fragment>
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          layers={[...deckLayerArr, ...trackingLayerArr]}
          controller={true}
          viewState={viewState}
          onViewStateChange={this._onViewStateChange.bind(this)}
          onHover={this._onHover}
          onClick={this.onClickFun}
          map={mapboxgl}
          // parameters={{
          //     blendFunc: [GL.SRC_ALPHA, GL.ONE, GL.ONE_MINUS_DST_ALPHA, GL.ONE],
          //     blendEquation: GL.FUNC_ADD
          // }}
        >
          <MapGL
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle={MAP_STYLE}
            ref={this.initMapCallback}
          />
        </DeckGL>
      </React.Fragment>
    );
  }
}
export default MapModel;
