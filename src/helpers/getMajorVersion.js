function getMajorVersion (fullVersion) {
  return fullVersion.substr(0, fullVersion.indexOf('.'));
}

export default getMajorVersion
