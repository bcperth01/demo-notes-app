// ceaet a storage stack for Dynamo tables and S3 buckets
import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  bucket;
  table;

  constructor(scope, id, props) {
    super(scope, id, props);

    // add a bucket
    this.bucket = new sst.Bucket(this, "Uploads");

    // add a DynamoDB Table

    this.table = new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        noteId: sst.TableFieldType.STRING,
      },
      primaryIndex: {
        partitionKey: "userId",
        sortKey: "noteId",
      },
    });
  }
}
