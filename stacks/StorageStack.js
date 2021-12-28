// ceaet a storage stack for Dynamo tables and 
import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  table;

  constructor(scope, id, props) {
    super(scope, id, props);
    this.table = new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        noteId: sst.TableFieldType.STRING,
      },
      primaryIndex: {
        partitionIndex: {
          partitionKey: "userId",
          sortKey: "NoteId",
        },
      },
    });
  }
}
