import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const base64UrlDecode = (base64Url) => {
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const decoded = new TextDecoder("utf-8").decode(
    new Uint8Array([...atob(base64)].map((c) => c.charCodeAt(0)))
  );
  return decoded;
};

const JwtDecoder = () => {
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5ODUyNTQ5LCJpYXQiOjE2OTk4NTIyNDksImp0aSI6ImJiZDk0YWRhNGYyYzRlZjliOGQ2NmE5NmQxN2I0YjE3IiwidXNlcl9pZCI6MiwidXNlcm5hbWUiOiJkYXZlIiwiZW1haWwiOiJkYXZlQG1haWxpbmF0b3IuY29tIiwiaWQiOjJ9.9FbqVrf14F_cB8he-8_TTDJPDNFcQA979d0PhPSsIxU"
  );
  const [decodedToken, setDecodedToken] = useState(null);

  const decodeJwtToken = () => {
    const [header, payload, signature] = token.split(".");

    if (!header || !payload || !signature) {
      console.error("Invalid JWT format");
      setDecodedToken(null);
      return;
    }

    try {
      const decodedHeader = JSON.parse(base64UrlDecode(header));
      const decodedPayload = JSON.parse(base64UrlDecode(payload));

      setDecodedToken({
        header: decodedHeader,
        payload: decodedPayload,
        signature,
      });
    } catch (error) {
      console.error("Error decoding JWT token:", error);
      setDecodedToken(null);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter JWT Token"
        value={token}
        onChangeText={(text) => setToken(text)}
        style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
      />
      <Button title="Decode Token" onPress={decodeJwtToken} />
      {decodedToken && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontWeight: "bold" }}>Decoded Token:</Text>
          <Text>{JSON.stringify(decodedToken, null, 2)}</Text>
        </View>
      )}
    </View>
  );
};

export default JwtDecoder;
