/**
 *
 * @param {Parse} Parse
 */

// Helper to create or update a schema
async function ensureSchema(Parse, className, setupFn) {
  const schema = new Parse.Schema(className);
  setupFn(schema);
  try {
    // If class exists, update it
    await schema.update();
    console.log(`✅ Updated schema for ${className}`);
  } catch (e) {
    // Otherwise, create it
    await schema.save();
    console.log(`✅ Created schema for ${className}`);
  }
}

// Helper to revert CLP (safe if class doesn’t exist)
async function patchSchema(Parse, className, setupFn) {
  const schema = new Parse.Schema(className);
  setupFn(schema);
  try {
    await schema.update();
    console.log(`🔄 Reverted schema for ${className}`);
  } catch (e) {
    console.warn(`⚠️ Skipping ${className} in down (not found)`);
  }
}

exports.up = async Parse => {
  await ensureSchema(Parse, 'contracts_Signature', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: {},
      addField: {},
    });
  });

  await ensureSchema(Parse, 'contracts_Document', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { requiresAuthentication: true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: {},
      addField: { requiresAuthentication: true },
    });
  });

  await ensureSchema(Parse, 'contracts_Template', schema => {
    schema.setCLP({
      get: { '*': true },
      find: {},
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: {},
      addField: { requiresAuthentication: true },
    });
  });

  await ensureSchema(Parse, 'partners_DataFiles', schema => {
    schema.setCLP({
      get: {},
      find: {},
      count: {},
      create: { '*': true },
      update: {},
      delete: {},
      addField: { '*': true },
    });
  });

  await ensureSchema(Parse, 'partners_Tenant', schema => {
    schema.setCLP({
      get: {},
      find: {},
      count: {},
      create: {},
      update: {},
      delete: {},
      addField: {},
    });
  });

  await ensureSchema(Parse, 'partners_TenantCredits', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: {},
      addField: { '*': true },
    });
  });

  await ensureSchema(Parse, '_User', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: {},
      addField: {},
    });
  });

  await ensureSchema(Parse, 'Migrationdb', schema => {
    schema.setCLP({
      get: {},
      find: {},
      count: {},
      create: {},
      update: {},
      delete: {},
      addField: {},
    });
  });

  await ensureSchema(Parse, 'contracts_Contactbook', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: {},
      addField: {},
    });
  });
};

exports.down = async Parse => {

  await patchSchema(Parse, 'contracts_Signature', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'contracts_Document', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'contracts_Template', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'partners_DataFiles', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'partners_Tenant', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'partners_TenantCredits', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, '_User', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'Migrationdb', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });

  await patchSchema(Parse, 'contracts_Contactbook', schema => {
    schema.setCLP({
      get: { '*': true },
      find: { '*': true },
      count: { '*': true },
      create: { '*': true },
      update: { '*': true },
      delete: { '*': true },
      addField: { '*': true },
    });
  });
};
