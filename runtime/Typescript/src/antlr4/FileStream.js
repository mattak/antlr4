/* Copyright (c) 2012-2022 The ANTLR Project. All rights reserved.
 * Use of this file is governed by the BSD 3-clause license that
 * can be found in the LICENSE.txt file in the project root.
 */

import InputStream from './InputStream.js';

/**
 * This is an InputStream that is loaded from a file all at once
 * when you construct the object.
 */
export default class FileStream extends InputStream {
	constructor(fileName, decodeToUnicodeCodePoints) {
      super(fileName, decodeToUnicodeCodePoints);
      throw new Error("not support nodejs fs api");
		// const data = fs.readFileSync(fileName, "utf8");
		// super(data, decodeToUnicodeCodePoints);
		// this.fileName = fileName;
	}
}
