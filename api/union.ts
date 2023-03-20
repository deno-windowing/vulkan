
/// Unions

/** // Union allowing specification of floating point, integer, or unsigned integer color data. Actual value selected is based on image/attachment being cleared. */
export class ClearColorValue {
  static size = 4;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < ClearColorValue.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

/** // Union allowing specification of color or depth and stencil values. Actual value selected is based on attachment being cleared. */
export class ClearValue {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < ClearValue.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

/** // Union of all the possible return types a counter result could return */
export class PerformanceCounterResultKHR {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < PerformanceCounterResultKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class PerformanceValueDataINTEL {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < PerformanceValueDataINTEL.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class PipelineExecutableStatisticValueKHR {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < PipelineExecutableStatisticValueKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class DeviceOrHostAddressKHR {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < DeviceOrHostAddressKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class DeviceOrHostAddressConstKHR {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < DeviceOrHostAddressConstKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class AccelerationStructureGeometryDataKHR {
  static size = 64;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < AccelerationStructureGeometryDataKHR.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class DescriptorDataEXT {
  static size = 8;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < DescriptorDataEXT.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}

export class AccelerationStructureMotionInstanceDataNV {
  static size = 152;

  #data: Uint8Array;
  #view: DataView;

  constructor(data: Uint8Array) {
    if (data.byteLength < AccelerationStructureMotionInstanceDataNV.size) {
      throw new Error("Data buffer too small");
    }
    this.#data = data;
    this.#view = new DataView(data.buffer);
  }
}