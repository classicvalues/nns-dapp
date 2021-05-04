// source: base_types.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.ic_base_types.pb.v1.CanisterAuthzInfo', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.CanisterId', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.MethodAuthzInfo', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.NeuronId', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.PrincipalId', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.ProposalId', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.tuiSignedDisplayQ22021', null, global);
goog.exportSymbol('proto.ic_base_types.pb.v1.tuiSignedMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_base_types.pb.v1.PrincipalId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_base_types.pb.v1.PrincipalId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_base_types.pb.v1.PrincipalId.displayName = 'proto.ic_base_types.pb.v1.PrincipalId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_base_types.pb.v1.CanisterId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_base_types.pb.v1.CanisterId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_base_types.pb.v1.CanisterId.displayName = 'proto.ic_base_types.pb.v1.CanisterId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_base_types.pb.v1.NeuronId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_base_types.pb.v1.NeuronId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_base_types.pb.v1.NeuronId.displayName = 'proto.ic_base_types.pb.v1.NeuronId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_base_types.pb.v1.ProposalId = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ic_base_types.pb.v1.ProposalId, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_base_types.pb.v1.ProposalId.displayName = 'proto.ic_base_types.pb.v1.ProposalId';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_base_types.pb.v1.MethodAuthzInfo.repeatedFields_, null);
};
goog.inherits(proto.ic_base_types.pb.v1.MethodAuthzInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_base_types.pb.v1.MethodAuthzInfo.displayName = 'proto.ic_base_types.pb.v1.MethodAuthzInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.ic_base_types.pb.v1.CanisterAuthzInfo.repeatedFields_, null);
};
goog.inherits(proto.ic_base_types.pb.v1.CanisterAuthzInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ic_base_types.pb.v1.CanisterAuthzInfo.displayName = 'proto.ic_base_types.pb.v1.CanisterAuthzInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_base_types.pb.v1.PrincipalId.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_base_types.pb.v1.PrincipalId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_base_types.pb.v1.PrincipalId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.PrincipalId.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedId: msg.getSerializedId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_base_types.pb.v1.PrincipalId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_base_types.pb.v1.PrincipalId;
  return proto.ic_base_types.pb.v1.PrincipalId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_base_types.pb.v1.PrincipalId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_base_types.pb.v1.PrincipalId}
 */
proto.ic_base_types.pb.v1.PrincipalId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.PrincipalId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_base_types.pb.v1.PrincipalId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_base_types.pb.v1.PrincipalId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.PrincipalId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes serialized_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_base_types.pb.v1.PrincipalId.prototype.getSerializedId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes serialized_id = 1;
 * This is a type-conversion wrapper around `getSerializedId()`
 * @return {string}
 */
proto.ic_base_types.pb.v1.PrincipalId.prototype.getSerializedId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedId()));
};


/**
 * optional bytes serialized_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedId()`
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.PrincipalId.prototype.getSerializedId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_base_types.pb.v1.PrincipalId} returns this
 */
proto.ic_base_types.pb.v1.PrincipalId.prototype.setSerializedId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_base_types.pb.v1.CanisterId.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_base_types.pb.v1.CanisterId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_base_types.pb.v1.CanisterId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.CanisterId.toObject = function(includeInstance, msg) {
  var f, obj = {
    serializedId: msg.getSerializedId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_base_types.pb.v1.CanisterId}
 */
proto.ic_base_types.pb.v1.CanisterId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_base_types.pb.v1.CanisterId;
  return proto.ic_base_types.pb.v1.CanisterId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_base_types.pb.v1.CanisterId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_base_types.pb.v1.CanisterId}
 */
proto.ic_base_types.pb.v1.CanisterId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSerializedId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.CanisterId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_base_types.pb.v1.CanisterId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_base_types.pb.v1.CanisterId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.CanisterId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSerializedId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes serialized_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.ic_base_types.pb.v1.CanisterId.prototype.getSerializedId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes serialized_id = 1;
 * This is a type-conversion wrapper around `getSerializedId()`
 * @return {string}
 */
proto.ic_base_types.pb.v1.CanisterId.prototype.getSerializedId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSerializedId()));
};


/**
 * optional bytes serialized_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSerializedId()`
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.CanisterId.prototype.getSerializedId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSerializedId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.ic_base_types.pb.v1.CanisterId} returns this
 */
proto.ic_base_types.pb.v1.CanisterId.prototype.setSerializedId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_base_types.pb.v1.NeuronId.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_base_types.pb.v1.NeuronId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_base_types.pb.v1.NeuronId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.NeuronId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 2, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_base_types.pb.v1.NeuronId}
 */
proto.ic_base_types.pb.v1.NeuronId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_base_types.pb.v1.NeuronId;
  return proto.ic_base_types.pb.v1.NeuronId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_base_types.pb.v1.NeuronId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_base_types.pb.v1.NeuronId}
 */
proto.ic_base_types.pb.v1.NeuronId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.NeuronId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_base_types.pb.v1.NeuronId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_base_types.pb.v1.NeuronId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.NeuronId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      2,
      f
    );
  }
};


/**
 * optional uint64 id = 2;
 * @return {string}
 */
proto.ic_base_types.pb.v1.NeuronId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, "0"));
};


/**
 * @param {string} value
 * @return {!proto.ic_base_types.pb.v1.NeuronId} returns this
 */
proto.ic_base_types.pb.v1.NeuronId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_base_types.pb.v1.ProposalId.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_base_types.pb.v1.ProposalId.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_base_types.pb.v1.ProposalId} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.ProposalId.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "0")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_base_types.pb.v1.ProposalId}
 */
proto.ic_base_types.pb.v1.ProposalId.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_base_types.pb.v1.ProposalId;
  return proto.ic_base_types.pb.v1.ProposalId.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_base_types.pb.v1.ProposalId} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_base_types.pb.v1.ProposalId}
 */
proto.ic_base_types.pb.v1.ProposalId.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readUint64String());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.ProposalId.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_base_types.pb.v1.ProposalId.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_base_types.pb.v1.ProposalId} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.ProposalId.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (parseInt(f, 10) !== 0) {
    writer.writeUint64String(
      1,
      f
    );
  }
};


/**
 * optional uint64 id = 1;
 * @return {string}
 */
proto.ic_base_types.pb.v1.ProposalId.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, "0"));
};


/**
 * @param {string} value
 * @return {!proto.ic_base_types.pb.v1.ProposalId} returns this
 */
proto.ic_base_types.pb.v1.ProposalId.prototype.setId = function(value) {
  return jspb.Message.setProto3StringIntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_base_types.pb.v1.MethodAuthzInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_base_types.pb.v1.MethodAuthzInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    principalIdsList: msg.getPrincipalIdsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_base_types.pb.v1.MethodAuthzInfo;
  return proto.ic_base_types.pb.v1.MethodAuthzInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_base_types.pb.v1.MethodAuthzInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMethodName(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addPrincipalIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_base_types.pb.v1.MethodAuthzInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_base_types.pb.v1.MethodAuthzInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrincipalIdsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      2,
      f
    );
  }
};


/**
 * optional string method_name = 1;
 * @return {string}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.getMethodName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo} returns this
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.setMethodName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated bytes principal_ids = 2;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.getPrincipalIdsList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * repeated bytes principal_ids = 2;
 * This is a type-conversion wrapper around `getPrincipalIdsList()`
 * @return {!Array<string>}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.getPrincipalIdsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getPrincipalIdsList()));
};


/**
 * repeated bytes principal_ids = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrincipalIdsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.getPrincipalIdsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getPrincipalIdsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo} returns this
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.setPrincipalIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo} returns this
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.addPrincipalIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo} returns this
 */
proto.ic_base_types.pb.v1.MethodAuthzInfo.prototype.clearPrincipalIdsList = function() {
  return this.setPrincipalIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.ic_base_types.pb.v1.CanisterAuthzInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ic_base_types.pb.v1.CanisterAuthzInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    methodsAuthzList: jspb.Message.toObjectList(msg.getMethodsAuthzList(),
    proto.ic_base_types.pb.v1.MethodAuthzInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ic_base_types.pb.v1.CanisterAuthzInfo}
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ic_base_types.pb.v1.CanisterAuthzInfo;
  return proto.ic_base_types.pb.v1.CanisterAuthzInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ic_base_types.pb.v1.CanisterAuthzInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ic_base_types.pb.v1.CanisterAuthzInfo}
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ic_base_types.pb.v1.MethodAuthzInfo;
      reader.readMessage(value,proto.ic_base_types.pb.v1.MethodAuthzInfo.deserializeBinaryFromReader);
      msg.addMethodsAuthz(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ic_base_types.pb.v1.CanisterAuthzInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ic_base_types.pb.v1.CanisterAuthzInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMethodsAuthzList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.ic_base_types.pb.v1.MethodAuthzInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MethodAuthzInfo methods_authz = 1;
 * @return {!Array<!proto.ic_base_types.pb.v1.MethodAuthzInfo>}
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.prototype.getMethodsAuthzList = function() {
  return /** @type{!Array<!proto.ic_base_types.pb.v1.MethodAuthzInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ic_base_types.pb.v1.MethodAuthzInfo, 1));
};


/**
 * @param {!Array<!proto.ic_base_types.pb.v1.MethodAuthzInfo>} value
 * @return {!proto.ic_base_types.pb.v1.CanisterAuthzInfo} returns this
*/
proto.ic_base_types.pb.v1.CanisterAuthzInfo.prototype.setMethodsAuthzList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.ic_base_types.pb.v1.MethodAuthzInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ic_base_types.pb.v1.MethodAuthzInfo}
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.prototype.addMethodsAuthz = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ic_base_types.pb.v1.MethodAuthzInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.ic_base_types.pb.v1.CanisterAuthzInfo} returns this
 */
proto.ic_base_types.pb.v1.CanisterAuthzInfo.prototype.clearMethodsAuthzList = function() {
  return this.setMethodsAuthzList([]);
};



/**
 * A tuple of {field number, class constructor} for the extension
 * field named `tuiSignedMessage`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.ic_base_types.pb.v1.tuiSignedMessage = new jspb.ExtensionFieldInfo(
    20000,
    {tuiSignedMessage: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.MessageOptions.extensionsBinary[20000] = new jspb.ExtensionFieldBinaryInfo(
    proto.ic_base_types.pb.v1.tuiSignedMessage,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.MessageOptions.extensions[20000] = proto.ic_base_types.pb.v1.tuiSignedMessage;


/**
 * A tuple of {field number, class constructor} for the extension
 * field named `tuiSignedDisplayQ22021`.
 * @type {!jspb.ExtensionFieldInfo<boolean>}
 */
proto.ic_base_types.pb.v1.tuiSignedDisplayQ22021 = new jspb.ExtensionFieldInfo(
    20001,
    {tuiSignedDisplayQ22021: 0},
    null,
     /** @type {?function((boolean|undefined),!jspb.Message=): !Object} */ (
         null),
    0);

google_protobuf_descriptor_pb.FieldOptions.extensionsBinary[20001] = new jspb.ExtensionFieldBinaryInfo(
    proto.ic_base_types.pb.v1.tuiSignedDisplayQ22021,
    jspb.BinaryReader.prototype.readBool,
    jspb.BinaryWriter.prototype.writeBool,
    undefined,
    undefined,
    false);
// This registers the extension field with the extended class, so that
// toObject() will function correctly.
google_protobuf_descriptor_pb.FieldOptions.extensions[20001] = proto.ic_base_types.pb.v1.tuiSignedDisplayQ22021;

goog.object.extend(exports, proto.ic_base_types.pb.v1);
