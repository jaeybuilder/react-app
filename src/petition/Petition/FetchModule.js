class fetchModule {
   async petition(url, config = null) {
      try {
         const res = await fetch(url, config);
         return await res.json();
      } catch (error) {
         console.error(error);
      }
   }

   config(method, { body, headers, credential }) {
      let config = {};

      config.method = method;
      if (credential)
         config.credential = credential;
      if (headers === null) {
         config.body = body;
      } else {
         config.headers = headers;
         config.body = JSON.stringify(body);
      }
      
      return config;
   }

   get(url, config) {
      return this.petition(url, config);
   }

   post(url, config) {
      return this.petition(url, this.config('POST', config));
   }

   put(url, config) {
      return this.petition(url, this.config('PUT', config));
   }

   delete(url, config) {
      return this.petition(url, this.config('Delete', config));
   }
}

export default fetchModule;